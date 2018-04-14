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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


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
            return "success";
        } catch (UnknownAccountException e) {
            e.printStackTrace();
        } catch (IncorrectCredentialsException e) {
            e.printStackTrace();
        } catch (AuthenticationException e) {
            e.printStackTrace();
        }
        return "failed";
    }

    /**
     *
     * @param rows 行
     * @param cols 列
     * @return
     */
    @RequestMapping("/addfieldstepone")
    public String managerAddFieldStepOne(Integer rows, Integer cols,Model model){
        if(logger.isDebugEnabled()){
            logger.debug("managerAddFieldStepOne() start  rows cols =="+ rows +"/"+cols);
        }

        if (null == rows || null == cols){
            return "404";
        }
        
        HashMap<Integer, List<SeatStepOneVO>> seatMap = new HashMap<>();
        for(int i=1;i<=rows;i++){
            ArrayList<SeatStepOneVO> seatStepOneVOList = new ArrayList<>();
            for (int j=1;j<=cols;j++){
                SeatStepOneVO seatStepOneVO = new SeatStepOneVO();
                seatStepOneVO.setRow(i);
                seatStepOneVO.setCol(j);
                seatStepOneVO.setHasSeatImage("y.png");
                seatStepOneVO.setNoneSeatImage("n.png");
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
        return "index";
    }


    /**
     *
     * @param totalrows 行
     * @param totalcols 列
     * @return
     */
    @RequestMapping("/addfieldsteptwo")
    public String managerAddFieldStepTwo(String seats,Integer totalrows, Integer totalcols,Model model){
        if(logger.isDebugEnabled()){
            logger.debug("managerAddFieldStepTwo() start  totalrows totalcols seats =="+ totalrows +"/"+totalcols+"/"+seats);
        }
        if (null == totalrows || null == totalcols){
            return "404";
        }
        String[] seatIds = StringUtils.split(seats, ";");
        for (String seatId:seatIds) {
            System.out.println(seatId);
        }

        return "index";
    }


}
