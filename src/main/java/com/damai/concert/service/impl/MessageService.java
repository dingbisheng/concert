package com.damai.concert.service.impl;

import com.damai.concert.dao.IMessageDAO;
import com.damai.concert.dto.MesDetDTO;
import com.damai.concert.dto.MessageDTO;
import com.damai.concert.service.IMessageService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2018/4/13.
 */
@Service
public class MessageService implements IMessageService {
    @Autowired
    private IMessageDAO messageDAO ;

    /** logger*/
    private static final Logger logger = Logger.getLogger(MessageService.class);

    public MessageDTO queryMessageInfo(Integer mesId) throws Exception {
       if (logger.isDebugEnabled()){
           logger.debug("queryMessageInfo() service start"+mesId);
       }
        MessageDTO messageDTO = messageDAO.queryMessageInfo(mesId);
        if (logger.isDebugEnabled()){
            logger.debug("queryMessageInfo() service end"+messageDTO.toString());
        }
        return messageDTO;
    }


}
