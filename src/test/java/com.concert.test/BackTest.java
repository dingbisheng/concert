package com.concert.test;

import com.damai.concert.dto.ManagerDTO;
import com.damai.concert.dto.RondaMessage;
import com.damai.concert.service.IBackService;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 * Created by Teori on 2018/4/16.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-core.xml")
public class BackTest {

    /** logger */
    private static final Logger logger = Logger.getLogger(BackTest.class);

    @Autowired
    private IBackService backService;

    @Test
    public void queryAllManager(){
        List<ManagerDTO> managerDTOs = null;
        try {
            managerDTOs = backService.queryAllManagerUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
        for (ManagerDTO managers :
                managerDTOs) {
            logger.info(managers);
        }
    }

    /**
     *
     */
    @Test
    public void queryAllRonda(){
        try {
            List<RondaMessage> rondaMessageList = backService.queryAllRondaMessage();
            for (RondaMessage mess:
                    rondaMessageList) {
                logger.info("==="+mess);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
