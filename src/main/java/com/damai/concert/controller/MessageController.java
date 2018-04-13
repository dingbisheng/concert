package com.damai.concert.controller;

import com.damai.concert.dto.MessageDTO;
import com.damai.concert.dto.MessageInfoDTO;
import com.damai.concert.service.IMessageService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by Administrator on 2018/4/13.
 */
@Controller
@RequestMapping("/message")
public class MessageController {

    /** logger*/
    private static final Logger logger = Logger.getLogger(MessageController.class);

    @Autowired
    private IMessageService messageService ;

    @RequestMapping("/info")
    public String queryMessageInfo(Integer mesId, Model model){
        if (logger.isDebugEnabled()){
            logger.debug("queryMessageInfo() start "+mesId);
        }
        MessageDTO messageDTO = null ;
        List<MessageInfoDTO> messageInfoDTOList = null;
        try {
            messageDTO = messageService.queryMessageInfo(mesId);
            messageInfoDTOList = messageDTO.getMessageInfoDTOList();

        } catch (Exception e) {
            e.printStackTrace();
        }
        model.addAttribute("messageDTO",messageDTO);
        model.addAttribute("messageInfoDTOList",messageInfoDTOList);
        if (logger.isDebugEnabled()){
            logger.debug("queryMessageInfo() end "+messageDTO.toString() +":::"+messageInfoDTOList.toString());
        }
        return "";
    }
}
