package com.damai.concert.controller;

import com.damai.concert.dto.setseatvo.SeatStepOneVO;
import com.damai.concert.realm.token.MyUsernamePasswordToken;
import com.damai.concert.service.IManagerService;
import com.damai.concert.sysconfig.SystemCfg;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.UnknownAccountException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Random;


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
     *
     * @param rows 行
     * @param cols 列
     * @return
     */
    @RequestMapping("/setseat")
    public String setSeat(Integer rows, Integer cols,Model model,HttpSession session) {
        if (logger.isDebugEnabled()) {
            logger.debug("managerAddFieldStepTwo() start  rows cols==" + rows + "/" + cols);
        }
        if (null == rows || null == cols) {
            return SystemCfg.FAILED_404;
        }
        try {
            session.setAttribute("seatrows",rows);
            session.setAttribute("seatcols",cols);
        }catch(Exception e){
            logger.fatal(e);
            return SystemCfg.FAILED_404;
        }
        return "damaiseat";
    }


    @RequestMapping("/getseat")
    public String getSeat(Model model,HttpSession session) {
        if (logger.isDebugEnabled()) {
            logger.debug("getSeat()");
        }

        try {
            Integer rows = (Integer) session.getAttribute("seatrows");
            Integer cols = (Integer) session.getAttribute("seatcols");

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
        }catch(Exception e){
            logger.fatal(e);
            return SystemCfg.FAILED_404;
        }
        return "index";
    }


}
