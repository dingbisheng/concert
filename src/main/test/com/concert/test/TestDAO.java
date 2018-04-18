package com.concert.test;


import com.damai.concert.dao.IAssortmentDAO;
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
public class TestDAO {

    /** logger */
    private static final Logger logger = Logger.getLogger(TestDAO.class);


    @Autowired
    private IUserDAO userDAO;

    @Autowired
    private IAssortmentDAO assortmentDAO;

    @Test
    public void testCase1(){
        List<UserDTO> list = null;
        try {
            list = userDAO.queryAll();
        } catch (Exception e) {
            e.printStackTrace();
        }
        logger.info(list.toString());
    }

    @Test
    public void testCase2(){
        UserDTO userDTO = null;
        try {
            userDTO = userDAO.queryUser("zhangsan");
        } catch (Exception e) {
            e.printStackTrace();
        }
        logger.info(userDTO.toString());
    }

    @Test
    public void testCase3(){
        AssortmentDTO assortmentDTO = new AssortmentDTO();
        assortmentDTO.setSortName("儿童乐园");
        assortmentDAO.save(assortmentDTO);
    }

    @Test
    public void testCase4(){
        SimpleHash simpleHash = new SimpleHash("MD5", "123456", "zhangsan");
        logger.info(simpleHash.toString());
    }


    @Autowired
    private IUserService userService;
    @Test
    public void testCase5(){
        try {
            userService.addUser("lcecwe","123456");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testCase6(){
        try {
            userService.updateUser("www","123456",2);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testCase7(){
        try {
            userService.deleteUser(2);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

//    @Autowired
//    private IMessageDAO messageDAO ;
//    @Test
//    public void test2(){
//        List<MessageDTO> messageDTOList = messageDAO.queryMessage("话剧歌剧");
//        if (logger.isInfoEnabled()){
//            logger.info(messageDTOList.toString());
//        }
//    }
    @Test
    public void test3(){
        List<UserDTO> list = null;
        try {
            list = userService.queryAll(0, 5);
            logger.info(list.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Test
    public void test() throws Exception {
        Integer userNum = userDAO.queryUserNum();
        logger.info(userNum);
    }

    @Test
    public void test1(){
        List<AssortmentDTO> assortmentDTOList = assortmentDAO.queryAssortment();
        logger.info(assortmentDTOList.toString());
    }

//    @Autowired
//    private IMessageDAO messageDAO ;

    @Test
    public void test12(){
        try {
            List<AssortmentDTO> messageDTOList = assortmentService.queryMessage(1,1,1);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Autowired
    private IAssortmentService assortmentService ;
    @Test
    public void test13(){
        List<AssortmentDTO> assortmentDTOList = null;
        try {
            assortmentDTOList = assortmentService.queryMessage(1);
        } catch (Exception e) {
            e.printStackTrace();
        }
        for (AssortmentDTO assortmentDTO :assortmentDTOList){
            logger.info(assortmentDTO.getSortName());
            List<SubclassDTO> subclassDTOList = assortmentDTO.getSubclassDTOList();
            for (SubclassDTO subclassDTO :subclassDTOList){
                logger.info(subclassDTO.getSubName());
                List<MessageDTO> messageDTOList = subclassDTO.getMessageDTOList();
                for (MessageDTO messageDTO :messageDTOList){
                    logger.info(messageDTO.getMesName());
                    CityDTO cityDTO = messageDTO.getCityDTO();
                    PlaceDTO placeDTO = messageDTO.getPlaceDTO();
                    List<MesDetDTO> mesDetList = messageDTO.getMesDetList();
                    logger.info(cityDTO.getCityName());
                    logger.info(placeDTO.getPlaceName());
                    for (MesDetDTO mesDetDTO:mesDetList){
                        logger.info( mesDetDTO.toString());
                    }
                }
            }
        }
    }


}
