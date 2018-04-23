//package com.concert.test;
//
//
//import com.damai.concert.dao.IAssortmentDAO;
//import com.damai.concert.dao.IMessageDAO;
//import com.damai.concert.dto.*;
//import org.apache.log4j.Logger;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//
//import java.util.List;
//
///**
// * Created by 王明 on 2018/4/9.
// */
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration("classpath:spring-core.xml")
//public class MessageTest {
//
//    /** logger */
//    private static final Logger logger = Logger.getLogger(MessageTest.class);
//
//
//    @Autowired
//    private IMessageDAO messageDAO ;
//
//    @Test
//    public void testCase1(){
//        MessageDTO messageDTO = null;
//        try {
//            messageDTO = messageDAO.queryMessageInfo(2);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        logger.info( messageDTO.getMesName());
//        List<MessageInfoDTO> messageInfoDTOList = messageDTO.getMessageInfoDTOList();
//        for (MessageInfoDTO messageInfoDTO:messageInfoDTOList){
//            logger.info(messageInfoDTO.toString());
//        }
//    }
//
//    @Autowired
//    private IAssortmentDAO assortmentDAO ;
//    @Test
//    public void test13()throws Exception{
//        List<AssortmentDTO> assortmentDTOList = assortmentDAO.queryMessage(null,null,1,null,null);
//        for (AssortmentDTO assortmentDTO :assortmentDTOList){
//            logger.info(assortmentDTO.getSortName());
//            List<SubclassDTO> subclassDTOList = assortmentDTO.getSubclassDTOList();
//            for (SubclassDTO subclassDTO :subclassDTOList){
//                logger.info(subclassDTO.getSubName());
//                List<MessageDTO> messageDTOList = subclassDTO.getMessageDTOList();
//                for (MessageDTO messageDTO :messageDTOList){
//                    logger.info(messageDTO.getMesName());
//                    CityDTO cityDTO = messageDTO.getCityDTO();
//                    PlaceDTO placeDTO = messageDTO.getPlaceDTO();
//                    List<MesDetDTO> mesDetList = messageDTO.getMesDetList();
//                    logger.info(cityDTO.getCityName());
//                    logger.info(placeDTO.getPlaceName());
//                    for (MesDetDTO mesDetDTO:mesDetList){
//                        logger.info( mesDetDTO.toString());
//                    }
//                }
//            }
//        }
//    }
//
//
//}
