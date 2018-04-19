package com.concert.test;

import com.damai.concert.dao.IManagerDAO;
import com.damai.concert.dao.INewOrderDAO;
import com.damai.concert.dto.ManagerDTO;
import com.damai.concert.dto.NewOrderDTO;
import com.damai.concert.dto.SubOrderDTO;
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
    private static final Logger logger = Logger.getLogger(ManagerDAOTest.class);

    @Autowired
    private IManagerDAO managerDAO;

    @Autowired
    private INewOrderDAO newOrderDAO;

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

    @Test
    public void testInsertNewOrder(){
        try {
            newOrderDAO.insertNewOrder("1112222","zhangsan",1,0,1);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testQueryNewOrder(){
        try {
            NewOrderDTO newOrderDTO = newOrderDAO.queryNewOrderByOrderNum("1112222");
            System.out.println(newOrderDTO);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testQueryNewOrderById(){
        try {
            NewOrderDTO newOrderDTO = newOrderDAO.queryNewOrderByOrderId(2);
            System.out.println(newOrderDTO);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testQueryNewOrderByUsername(){
        try {
            List<NewOrderDTO> zhangsan = newOrderDAO.queryNewOrderListByUsername("zhangsan");
            System.out.println(zhangsan);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testInsertSubOrder(){
        try {
            newOrderDAO.insertSubOrder(1,2);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testQuerySubOrder(){
        try {
            List<SubOrderDTO> subOrderDTOs = newOrderDAO.querySubOrderByOrderId(2);
            for(SubOrderDTO s:subOrderDTOs)
            System.out.println(s);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}
