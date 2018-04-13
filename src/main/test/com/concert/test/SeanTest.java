package com.concert.test;

import com.damai.concert.dao.IOrderDAO;
import com.damai.concert.dto.OrderDTO;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 * Created by 王明 on 2018/4/12.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-core.xml")
public class SeanTest {

    /** logger */
    private static final Logger logger = Logger.getLogger(SeanTest.class);


    @Autowired
    private IOrderDAO orderDAO;

    @Test
    public void testCase1(){
        List<OrderDTO> list = orderDAO.queryOrders("zhangsan");
        for (OrderDTO orderDTO:list){
            logger.info("1_________"+orderDTO.toString());
            String mesName = orderDTO.getMessageDTO().getMesName();
            logger.info("2------------"+mesName);
        }


    }

}
