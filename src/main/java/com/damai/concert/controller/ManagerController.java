package com.damai.concert.controller;

import com.damai.concert.dto.JsonMsgDTO;
import com.damai.concert.dto.NewOrderDTO;
import com.damai.concert.dto.SeatDTO;
import com.damai.concert.dto.setseatvo.SeatStepOneVO;
import com.damai.concert.realm.token.MyUsernamePasswordToken;
import com.damai.concert.service.IManagerService;
import com.damai.concert.service.INewOrderService;
import com.damai.concert.service.ISeatService;
import com.damai.concert.sysconfig.SystemCfg;
import com.google.gson.Gson;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.*;
import java.util.concurrent.TimeUnit;


/**
 * Created by Administrator on 2018\4\12 0012.
 */
@Controller
@RequestMapping("/admin")
public class ManagerController {

    /**
     * logger
     */
    public static final Logger logger = Logger.getLogger(ManagerController.class);

    @Autowired
    private IManagerService managerService;

    @Autowired
    private ISeatService seatService;

    @Autowired
    private INewOrderService newOrderService;

    @Autowired
    private StringRedisTemplate redisTemplate;

    @RequestMapping("/login")
    @ResponseBody
    public String managerDoLogin(String username,String password,boolean rememberMe){
        if(logger.isDebugEnabled()){
            logger.debug("doLogin() start  username =="+ username);
        }
        MyUsernamePasswordToken token = new MyUsernamePasswordToken(username, password);
        token.setSwitchType(SystemCfg.MANAGER_LOGIN_REALM_NAME);
        token.setRememberMe(rememberMe);
        try {
            SecurityUtils.getSubject().login(token);
            return SystemCfg.SUCCESS_DATA;
        } catch (UnknownAccountException e) {
            e.printStackTrace();
        } catch (IncorrectCredentialsException e) {
            e.printStackTrace();
        } catch (AuthenticationException e) {
            e.printStackTrace();
        }
        return SystemCfg.FAILED_DATA;
    }

    /**
     *
     * @param rows 行
     * @param cols 列
     * @return
     */
    @RequestMapping("/addfieldstepone")
    public String managerAddFieldStepOne(Integer rows, Integer cols, Model model, HttpSession session){
        if(logger.isDebugEnabled()){
            logger.debug("managerAddFieldStepOne() start  rows cols =="+ rows +"/"+cols);
        }

        if (null == rows || null == cols || rows==0 || cols == 0){
            return SystemCfg.FAILED_404;
        }
        try{
            String tokenRandomString = SystemCfg.TOKEN_RANDOM_STRING;
            int length = tokenRandomString.length();
            Random random = new Random();
            String token = "";
            for (int i=0;i<5;i++) {
                int i1 = random.nextInt(length);
                token = token + tokenRandomString.charAt(i1);
            }
            session.setAttribute("token",token);
            HashMap<Integer, List<SeatStepOneVO>> seatMap = new HashMap<>();
            for(int i=1;i<=rows;i++){
                ArrayList<SeatStepOneVO> seatStepOneVOList = new ArrayList<>();
                for (int j=1;j<=cols;j++){
                    SeatStepOneVO seatStepOneVO = new SeatStepOneVO();
                    seatStepOneVO.setRow(i);
                    seatStepOneVO.setCol(j);
                    seatStepOneVO.setHasSeatImage(SystemCfg.HAS_SEAT_PNG);
                    seatStepOneVO.setNoneSeatImage(SystemCfg.NO_SEAT_PNG);
                    seatStepOneVOList.add(seatStepOneVO);
                }
                seatMap.put(i,seatStepOneVOList);
            }
            if(logger.isDebugEnabled()){
                logger.debug("seatMap=="+seatMap);
            }
            model.addAttribute("seatMap",seatMap);
            model.addAttribute("rows",rows);
            model.addAttribute("cols",cols);
            model.addAttribute("token",token);
        }catch (Exception e){
            logger.fatal(e);
            return SystemCfg.FAILED_404;
        }
        return "index";
    }


    /**
     *
     * @param totalrows 行
     * @param totalcols 列
     * @return
     */
    @RequestMapping("/addfieldsteptwo")
    public String managerAddFieldStepTwo(String token ,String noneseatids,String notnoneseatids,Integer totalrows, Integer totalcols,Model model,HttpSession session) {
        if (logger.isDebugEnabled()) {
            logger.debug("managerAddFieldStepTwo() start  totalrows totalcols noneseatids notnoneseatids ==" + totalrows + "/" + totalcols + "/" + noneseatids + "/" + notnoneseatids);
        }
        if (null == token || null == totalrows || null == totalcols || totalrows == 0 || totalcols == 0) {
            return SystemCfg.FAILED_404;
        }
        try {
            if (!token.equals(session.getAttribute("token"))) {
                //重复提交了
                logger.fatal("重复提交了座位信息");
                return SystemCfg.FAILED_DATA;
            } else {
                session.removeAttribute("token");
            }
            String[] notNoneSeatIds = StringUtils.split(notnoneseatids, SystemCfg.SEAT_SPLIT);
            String replace = noneseatids;
            for (String seat : notNoneSeatIds) {
                replace = StringUtils.replace(replace, seat, "", 1);
            }
            String[] noneSeatIds = StringUtils.split(replace, SystemCfg.SEAT_ROW_COL_SPLIT);
            String[] rowAndCol = null;
            for (String i : noneSeatIds) {
                rowAndCol = StringUtils.split(replace, SystemCfg.SEAT_SPLIT);
            }
            int row;
            int col;
            ArrayList<int[]> ints = new ArrayList<>();
            for (int i = 1; i <= totalrows; i++) {
                for (int j = 1; j <= totalcols; j++) {
                    int[] seatArray = new int[2];
                    boolean flag = true;
                    for (String seat : rowAndCol) {
                        String[] split = StringUtils.split(seat, SystemCfg.SEAT_ROW_COL_SPLIT);
                        row = Integer.parseInt(split[0]);
                        col = Integer.parseInt(split[1]);
                        if (i == row && j == col) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        seatArray[0] = i;
                        seatArray[1] = j;
                        ints.add(seatArray);
                    }
                }
            }
            if (logger.isDebugEnabled()) {
                logger.debug("ints.size() ===" + ints.size());
            }
            for (int[] is : ints) {
                if (logger.isDebugEnabled()) {
                    logger.debug("row ===" + is[0]);
                }
                System.out.print(",");
                if (logger.isDebugEnabled()) {
                    logger.debug("col ===" + is[1]);
                }
            }
        }catch(Exception e){
            logger.fatal(e);
            return SystemCfg.FAILED_404;
        }
        return SystemCfg.SUCCESS_DATA;
    }




    /**
     * @param msgId 场次Id
     * @return
     */
    @RequestMapping("/setseat")
    public String setSeat(Integer msgId,Model model) {
        if (logger.isDebugEnabled()) {
            logger.debug("setSeat() start  msgId==" + msgId);
        }
        if (null == msgId) {
            return SystemCfg.FAILED_404;
        }
        try {
            model.addAttribute("msgId",msgId);
        }catch(Exception e){
            logger.fatal(e);
            return SystemCfg.FAILED_404;
        }
        return "damaiseat";
    }

    /**
     * 依据场次Id  获取该场次座位表
     * @param model
     * @param session
     * @return
     */
    @RequestMapping("/getseat")
    public String getSeat(Integer msgId,Model model,HttpSession session) {
        if (logger.isDebugEnabled()) {
            logger.debug("getSeat() start msgId =="+msgId);
        }
        try {
            model.addAttribute("msgId",msgId);
            Map<Integer, List<SeatDTO>> seatMap = seatService.getViewSeat(msgId);
            model.addAttribute("seatMap",seatMap);
            String tokenRandomString = SystemCfg.TOKEN_RANDOM_STRING;
            int length = tokenRandomString.length();
            Random random = new Random();
            String token = "";
            for (int i=0;i<5;i++) {
                int i1 = random.nextInt(length);
                token = token + tokenRandomString.charAt(i1);
            }
//            model.addAttribute("seattoken",token);
            session.setAttribute("seattoken",token);
            if(logger.isDebugEnabled()){
                logger.debug("seatMap==="+seatMap);
            }
        }catch(Exception e){
            logger.fatal(e);
            return SystemCfg.FAILED_404;
        }
        if (logger.isDebugEnabled()) {
            logger.debug("getSeat() end");
        }
        return "seat";
    }

    //锁定座位
    @RequestMapping(value="/lock",produces = "text/HTML; charset=utf-8")
    @ResponseBody
    public String doLock(String seattoken,Integer msgId,String myseatids,String notmyseatids,Model model,HttpSession session){
        if (logger.isDebugEnabled()) {
            logger.debug("doLock() start myseatids + notmyseatids = " +myseatids+"+"+notmyseatids);
        }
        JsonMsgDTO jsonMsgDTO = new JsonMsgDTO();
        Gson gson = new Gson();
        String s=null;
        Object localSeatToken = session.getAttribute("seattoken");
        if(null==localSeatToken || !localSeatToken.equals(seattoken)){
            jsonMsgDTO.setCode(1);
            jsonMsgDTO.setMsg("请不要重复提交订单");
            s = gson.toJson(jsonMsgDTO);
            return s;
        }
        Long orderNum = 0L;
        try{
            String[] notMySeatIds = StringUtils.split(notmyseatids, SystemCfg.SEAT_SPLIT);
            String mySeatIds = myseatids;
            String username=(String)session.getAttribute("username");

            if(null==username||"".equals(username)){
                if(logger.isDebugEnabled()){
                    logger.debug("用户未登录");
                }
                jsonMsgDTO.setCode(0);
                jsonMsgDTO.setMsg("请登录后再购买");
                s = gson.toJson(jsonMsgDTO);
                if(logger.isDebugEnabled()){
                    logger.debug("s========="+s);
                }
                return s;
            }
            for (String seat : notMySeatIds) {
                mySeatIds = StringUtils.replace(mySeatIds, seat, "", 1);
            }
            String[] mySeatIdArray = StringUtils.split(mySeatIds, SystemCfg.SEAT_SPLIT);
            if(mySeatIdArray.length==0){
                if(logger.isDebugEnabled()){
                    logger.debug("用户未选座");
                }
                jsonMsgDTO.setCode(1);
                jsonMsgDTO.setMsg("没有座位被选中");
                s = gson.toJson(jsonMsgDTO);
                return s;
            }
            //验证是否可以全部锁定
            String[] rowAndCol = null;
            for (String i : mySeatIdArray) {
                rowAndCol = StringUtils.split(i, SystemCfg.SEAT_ROW_COL_SPLIT);
                String row = rowAndCol[0];
                String col = rowAndCol[1];
                String hisId = rowAndCol[2];
                //redis setNX  如果存在该key  则返回false   不存在  则写入
                Boolean isLockSuccess = redisTemplate.opsForValue().setIfAbsent(SystemCfg.SEAT_STATE_PREFIX + hisId, username);
                if(logger.isDebugEnabled()){
                    logger.debug("username == isLockSuccess=="+username + isLockSuccess);
                }
                if(isLockSuccess){
                    //如果成功锁定   加短时锁
                    redisTemplate.expire(SystemCfg.SEAT_STATE_PREFIX+hisId, SystemCfg.SEAT_LOCK_SORT_TIME,TimeUnit.SECONDS);
                }else{
                    String sKey = redisTemplate.opsForValue().get(SystemCfg.SEAT_STATE_PREFIX + hisId);
                    //如果key里面   保存的不是自己的username 则返回被其他人锁定的座位行号和列号
                    if(!username.equals(sKey)){
                        if(logger.isDebugEnabled()){
                            logger.debug("被锁定");
                        }
                        jsonMsgDTO.setCode(1);
                        jsonMsgDTO.setMsg("座被其他人锁定，请更换该座位。");
                        s = gson.toJson(jsonMsgDTO);
                        return s;
                    }
                }
            }
            //全部成功则生成订单编号
            orderNum = redisTemplate.opsForValue().increment(SystemCfg.ORDER_NUM_NAME, 1);
            newOrderService.insertNewOrder(""+orderNum,username,0,0,msgId);
            NewOrderDTO newOrderDTO = newOrderService.queryNewOrderByOrderNum("" + orderNum);
            Integer orderId = newOrderDTO.getOrderId();
            for (String i : mySeatIdArray) {
                rowAndCol = StringUtils.split(i, SystemCfg.SEAT_ROW_COL_SPLIT);
                String hisId = rowAndCol[2];
                //如果全部座位能成功短时锁定  则加上长时间锁定
                redisTemplate.expire(SystemCfg.SEAT_STATE_PREFIX+hisId, SystemCfg.SEAT_LOCK_TIME, TimeUnit.SECONDS);
                newOrderService.insertSubOrder(Integer.parseInt(hisId),orderId);
            }
            //生成订单后清除token
            session.removeAttribute("seattoken");
        }catch (Exception e){
            logger.fatal(e);
            jsonMsgDTO.setCode(1);
            jsonMsgDTO.setMsg("系统异常，请稍后再试。");
            s = gson.toJson(jsonMsgDTO);
            return s;
        }
        if (logger.isDebugEnabled()) {
            logger.debug("doLock() end  success");
        }
        jsonMsgDTO.setCode(2);
        jsonMsgDTO.setMsg(orderNum.toString());
        s = gson.toJson(jsonMsgDTO);
        return s;
    }

    @RequestMapping("/queryOrder")
    public String queryOrder(String orderNum,Model model){
        if (logger.isDebugEnabled()) {
            logger.debug("queryOrder() start");
        }

        try{
            NewOrderDTO order = newOrderService.queryNewOrderByOrderNum(orderNum);
            model.addAttribute("order",order);
        }catch (Exception e){
            logger.fatal(e);
            return "404";
        }
        if (logger.isDebugEnabled()) {
            logger.debug("queryOrder() end  success");
        }
        return "buy";
    }



    //购买
    @RequestMapping("/buy")
    public String doBuy(Integer msgId,String myseatids,String notmyseatids,Model model){
        if (logger.isDebugEnabled()) {
            logger.debug("doBuy() start myseatids + notmyseatids = " +myseatids+"+"+notmyseatids);
        }
        try{
            String[] notMySeatIds = StringUtils.split(notmyseatids, SystemCfg.SEAT_SPLIT);
            String mySeatIds = myseatids;
            for (String seat : notMySeatIds) {
                mySeatIds = StringUtils.replace(mySeatIds, seat, "", 1);
            }
            String[] mySeatIdArray = StringUtils.split(mySeatIds, SystemCfg.SEAT_SPLIT);
            if(mySeatIdArray.length==0){
                return "failed";
            }
        }catch (Exception e){
            logger.fatal(e);
            return "404";
        }
        if (logger.isDebugEnabled()) {
            logger.debug("doBuy() end");
        }
        return "buy";
    }

    @RequestMapping("/loadseat")
    @ResponseBody
    public String doLoadSeatOnWindow(Integer msgId,String myseatids,String notmyseatids){
        if(logger.isDebugEnabled()){
            logger.debug("doLoadSeatOnWindow() start msgId=="+msgId+"myseatids=="+myseatids+"notmyseatids=="+notmyseatids);
        }

        Gson gson = new Gson();
        String jsonData = null;
        try {
            String[] notMySeatIds = StringUtils.split(notmyseatids, SystemCfg.SEAT_SPLIT);
            String mySeatIds = myseatids;
            for (String seat : notMySeatIds) {
                mySeatIds = StringUtils.replace(mySeatIds, seat, "", 1);
            }
            String[] mySeatIdArray = StringUtils.split(mySeatIds, SystemCfg.SEAT_SPLIT);
            //验证是否可以全部锁定
            String[] rowAndCol = null;
            List<SeatDTO> seatDTOList = new ArrayList<>();
            for (String i : mySeatIdArray) {
                rowAndCol = StringUtils.split(i, SystemCfg.SEAT_ROW_COL_SPLIT);
                String hisId = rowAndCol[2];
                SeatDTO seatByMsgIdAndSeatId = seatService.getSeatByMsgIdAndSeatId(msgId, Integer.parseInt(hisId));
                seatDTOList.add(seatByMsgIdAndSeatId);
            }
            jsonData = gson.toJson(seatDTOList);
        }catch (Exception e) {
            e.printStackTrace();
            logger.fatal(e);
            return "404";
        }
        if(logger.isDebugEnabled()){
            logger.debug("doLoadSeatOnWindow() end jsonData=="+jsonData);
        }
        return jsonData;
    }


}
