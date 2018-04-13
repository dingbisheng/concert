package com.concert.test;


import com.damai.concert.dao.IAssortmentDAO;
import com.damai.concert.dao.IMessageDAO;
import com.damai.concert.dao.IUserDAO;
import com.damai.concert.dto.*;
import com.damai.concert.service.IAssortmentService;
import com.damai.concert.service.IUserService;
import org.apache.log4j.Logger;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 * Created by 王明 on 2018/4/9.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-core.xml")
public class MessageTest {

    /** logger */
    private static final Logger logger = Logger.getLogger(MessageTest.class);


    @Autowired
    private IMessageDAO messageDAO ;

    @Test
    public void testCase1(){
        MessageDTO messageDTO = messageDAO.queryMessageInfo(2);
       logger.info( messageDTO.getMesName());
        List<MessageInfoDTO> messageInfoDTOList = messageDTO.getMessageInfoDTOList();
        for (MessageInfoDTO messageInfoDTO:messageInfoDTOList){
            logger.info(messageInfoDTO.toString());
        }
    }




}
