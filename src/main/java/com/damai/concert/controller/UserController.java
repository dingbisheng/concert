package com.damai.concert.controller;

import com.damai.concert.dao.IUserDAO;
import com.damai.concert.dto.AssortmentDTO;
import com.damai.concert.dto.UserDTO;
import com.damai.concert.realm.token.MyUsernamePasswordToken;
import com.damai.concert.service.IAssortmentService;
import com.damai.concert.service.IUserService;
import com.damai.concert.sysconfig.SystemCfg;
import com.jagregory.shiro.freemarker.ShiroTags;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import org.apache.commons.io.output.FileWriterWithEncoding;
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
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;

/**
 * 前台用户请求处理
 * Created by Vincent on 2018\4\10 0010.
 */

@Controller
@RequestMapping("/user")
public class UserController {

    /**
     * logger
     */
    private static final Logger logger = Logger.getLogger(UserController.class);

    @Autowired
    private IUserService userService;

    @Autowired
    private IAssortmentService assortmentService;

    @RequestMapping("/login")
    @ResponseBody
    public String doLogin(String username,String password,boolean rememberMe){
        if(logger.isDebugEnabled()){
            logger.debug("doLogin() start  username =="+ username);
        }
        MyUsernamePasswordToken token = new MyUsernamePasswordToken(username, password);
        token.setSwitchType(SystemCfg.USER_LOGIN_REALM_NAME);
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


    @RequestMapping("/main")
    public String queryAssortment(Model model){
        List<AssortmentDTO> assortmentDTOList = assortmentService.queryAssortment();
        model.addAttribute("assortmentDTOList",assortmentDTOList);
        return "main";
    }





//    @RequestMapping("/login")
//    public String doLogin(String username,String password,HttpSession session){
//        UserDTO userDTO = userService.queryUser(username);
//        if(null == userDTO){
//            System.out.println("登录失败");
//            return "/failed.jsp";
//        }
//        System.out.println("登录成功");
//        System.out.println("----name=="+username);
//        String ftlPath = session.getServletContext().getRealPath("/WEB-INF/ftl");
//        Configuration configuration = new Configuration();
//        try {
//            configuration.setDirectoryForTemplateLoading(new File(ftlPath));
//            configuration.setDefaultEncoding("UTF-8");
//            configuration.setSharedVariable("shiro", new ShiroTags());
//            // 获取或创建一个模版。
//            Template template = configuration.getTemplate("hello.ftl");
//            // 获取html静态页面文件
//            String indexPath = session.getServletContext().getRealPath("/hello.html");
//            //设置文件输入流编码，不然生成的html文件会中文乱码
//            FileWriterWithEncoding out = new FileWriterWithEncoding (indexPath,"UTF-8");
//            // 将页面中要展示的数据放入一个map中
//            HashMap<String,Object> map = new HashMap<String, Object>();
//            map.put("name", username);
//            //将map中的数据输入到index.ftl这个模板文件中并遍历出来，最后再将整个模板的数据写入到index.html中。
//            template.process(map, out);
//            out.close();
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (TemplateException e) {
//            e.printStackTrace();
//        }
//        return "/hello.html";
//    }



}
