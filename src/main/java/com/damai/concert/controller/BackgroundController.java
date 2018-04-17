package com.damai.concert.controller;

import com.damai.concert.dto.ManagerDTO;
import com.damai.concert.dto.RondaMessage;
import com.damai.concert.dto.UserDTO;
import com.damai.concert.service.IBackService;
import com.damai.concert.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by Teori on 2018/4/16.
 */
@Controller
@RequestMapping("/back")
public class BackgroundController {

    @Autowired
    private IUserService userService;

    @Autowired
    private IBackService backService;

    /**
     * 管理员
     * @param model
     * @return
     */
    @RequestMapping("/manager")
    public String queryMangerUser(Model model){
        try {
            List<ManagerDTO> managerDTOs = backService.queryAllManagerUser();
            model.addAttribute("managerDTOs",managerDTOs);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "back/manager_user";
    }

    /**
     * 用户
     * @param model
     * @return
     */
    @RequestMapping("/user")
    public String queryUser(Model model,String page){
        Integer initPage = null;
        if (null == page){
            initPage = 0;
        }else {
            initPage = Integer.parseInt(page);
        }
        try {
            //分页查询
            List<UserDTO> userDTOs = userService.queryAll(initPage,1);

//            model.addAttribute("page",initPage);
            model.addAttribute("userDTOs",userDTOs);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "back/normal_user";
    }


    /**
     * 添加场次
     * @return
     */
    @RequestMapping("/addRonda")
    public String addRonda(){
        return "";
    }

    /**
     * 删除场次
     * @return
     */
    @RequestMapping("/delRonda")
    public String delRonda(){
        return "";
    }

    /**
     * 查询所有场次
     * @return
     */
    @RequestMapping("/queryAllRonda")
    public String queryAllRondaMessage(Model model,String page){
        Integer initPage = null;
        if (null == page){
            initPage = 0;
        }else {
            initPage = Integer.parseInt(page);
        }
        try {
            //分页查询
//            List<UserDTO> userDTOs = userService.queryAll(initPage, SystemCfg.PAGE_SIZE);
            List<RondaMessage> rondaMessageList = backService.queryAllRondaMessage();

//            model.addAttribute("page",initPage);
//            model.addAttribute("",userService.)
            model.addAttribute("rondaMessageList",rondaMessageList);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "back/ronda_all";
    }

    @RequestMapping("/addUser")
    @ResponseBody
    public String addUser(UserDTO userDTO){
//        userService.addUser();
        return "";
    }
}