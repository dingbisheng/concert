package com.concert.test;


import com.damai.concert.dao.IAssortmentDAO;
import com.damai.concert.dao.IUserDAO;
import com.damai.concert.dto.AssortmentDTO;
import com.damai.concert.dto.UserDTO;
import org.apache.log4j.Logger;
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
public class TestDAO {

    /** logger */
    private static final Logger logger = Logger.getLogger(TestDAO.class);


    @Autowired
    private IUserDAO userDAO;

    @Autowired
    private IAssortmentDAO assortmentDAO;

    @Test
    public void testCase1(){
        List<UserDTO> list = userDAO.queryAll();
        logger.info(list.toString());
    }

    @Test
    public void testCase2(){
        UserDTO userDTO = userDAO.queryUser("zhangsan");
        logger.info(userDTO.toString());
    }

    @Test
    public void testCase3(){
        AssortmentDTO assortmentDTO = new AssortmentDTO();
        assortmentDTO.setSortName("儿童乐园");
        assortmentDAO.save(assortmentDTO);
    }

}
