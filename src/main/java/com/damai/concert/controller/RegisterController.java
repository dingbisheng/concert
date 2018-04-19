package com.damai.concert.controller;

import com.damai.concert.dto.UserDTO;
import com.damai.concert.realm.token.MyUsernamePasswordToken;
import com.damai.concert.service.IUserService;
import com.damai.concert.sysconfig.SystemCfg;
import com.damai.concert.verificate.IndustrySMS;
import com.damai.concert.verificate.VerificationCode;
import org.apache.log4j.Logger;
import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;

/**
 * Created by Teori on 2018/4/13.
 */
@Controller
@RequestMapping("/reg")
public class RegisterController {

    /** logger */
    private static final Logger logger = Logger.getLogger(RegisterController.class);

    @Autowired
    private IUserService userService;

    @RequestMapping("/sendSms")
    @ResponseBody
    public String sendSms(@RequestParam("login_email") String login_email, HttpSession session){
        VerificationCode verificationCode = new VerificationCode();
        String code = verificationCode.createCode();

        session.setAttribute("code",code);

        IndustrySMS.execute(login_email,code);
        return "success";
    }

    @RequestMapping("/register")
    @ResponseBody
    public String register(String login_email,String login_pwd,String vcode,HttpSession session) {
        String code = (String) session.getAttribute("code");
        if(logger.isDebugEnabled()){
            logger.debug("doLogin() start  =="+ login_email + "/" +login_pwd + "/" + code + "/" + vcode);
        }

        if (!code.equals(vcode)) {
            return "failed";
        }
        UserDTO userDTO = null;
        MyUsernamePasswordToken token;
        try {
            userDTO = userService.queryUser(login_email);
            if (null == userDTO) {
                //需要注册
                if (null == login_pwd || "".equals(login_pwd)) {
                    userService.addUser(login_email, SystemCfg.INIT_PWD);
                    token = new MyUsernamePasswordToken(login_email, "");
                } else {
                    userService.addUser(login_email, login_pwd);
                    token = new MyUsernamePasswordToken(login_email, "");
                }
                token.setMsgLogin(SystemCfg.MSG_LOGIN);
                token.setSwitchType(SystemCfg.USER_LOGIN_REALM_NAME);

            } else {
                //不需要注册
                token = new MyUsernamePasswordToken(login_email, "");
                token.setMsgLogin(SystemCfg.MSG_LOGIN);
                token.setSwitchType(SystemCfg.USER_LOGIN_REALM_NAME);

            }
            SecurityUtils.getSubject().login(token);

        } catch (Exception e) {
            e.printStackTrace();
            return "failed";
        }

        return "success";
    }

    @RequestMapping("/view")
    public ModelAndView testView(){
        ModelAndView modelAndView = new ModelAndView("test");
        modelAndView.addObject("name","zxy");
        return modelAndView;
    }

}