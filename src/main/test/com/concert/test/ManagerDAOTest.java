package com.concert.test;

import com.damai.concert.dao.IManagerDAO;
import com.damai.concert.dto.ManagerDTO;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

/**
 * ManagerDAOTest
 * Created by 丁必胜 on 2018/4/9.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-core.xml")
public class ManagerDAOTest{

    /** logger */
    private static final Logger logger = Logger.getLogger(TestDAO.class);

    @Autowired
    private IManagerDAO managerDAO;

    @Test
    public void queryManagerDTOByName(){
        try {
            ManagerDTO managerDTO = managerDAO.queryManagerDTOByName("admin");
            logger.debug(managerDTO);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void queryManagerRoleList(){
        try {
            List<String> admin = managerDAO.queryManagerRoleList("admin");
            logger.debug(admin);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void queryManagerPermissionList(){
        try {
            List<String> admin = managerDAO.queryManagerPermissionList("admin");
            logger.debug(admin);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
