package com.damai.concert.dao.impl;

import com.damai.concert.dao.INewOrderDAO;
import com.damai.concert.dto.NewOrderDTO;
import com.damai.concert.dto.SubOrderDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.log4j.Logger;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by 王明 on 2018/4/18.
 */
@Repository
public class NewOrderDAO extends SqlSessionDaoSupport implements INewOrderDAO{

    /**
     * logger
     */
    private static final Logger logger = Logger.getLogger(NewOrderDAO.class);

    @Autowired
    @Override
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    @Override
    public NewOrderDTO queryNewOrderByOrderId(Integer orderId) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("queryNewOrderListByOrderId() start  orderId === "+orderId);
        }
        NewOrderDTO newOrderDTO = getSqlSession().selectOne("com.damai.com.concert.test.dto.NewOrderDTOMapper.queryNewOrderByOrderId", orderId);
        if(logger.isDebugEnabled()){
            logger.debug("queryNewOrderListByOrderId() end  newOrderDTO === "+newOrderDTO);
        }
        return newOrderDTO;
    }

    @Override
    public List<NewOrderDTO> queryNewOrderListByUsername(String username) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("queryNewOrderListByUsername() start  username === "+username);
        }
        List<NewOrderDTO> newOrderDTOList = getSqlSession().selectList("com.damai.com.concert.test.dto.NewOrderDTOMapper.queryNewOrderListByUsername", username);
        if(logger.isDebugEnabled()){
            logger.debug("queryNewOrderListByUsername() end  newOrderDTOList === "+newOrderDTOList);
        }
        return newOrderDTOList;
    }

    @Override
    public NewOrderDTO queryNewOrderByOrderNum(String orderNum) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("queryNewOrderListByOrderNum() start  orderNum === "+orderNum);
        }
        NewOrderDTO newOrderDTO = getSqlSession().selectOne("com.damai.com.concert.test.dto.NewOrderDTOMapper.queryNewOrderByOrderNum", orderNum);
        if(logger.isDebugEnabled()){
            logger.debug("queryNewOrderListByOrderNum() end  newOrderDTO === "+newOrderDTO);
        }
        return newOrderDTO;
    }

    @Override
    public void insertNewOrder(String orderNum,String username,Integer orderPrice,Integer orderCondition,Integer msgId) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("insertNewOrder() start orderNum=="+orderNum);
        }
        Map<String, Object> map = new HashMap<>();
        map.put("orderNum",orderNum);
        map.put("username",username);
        map.put("orderPrice",orderPrice);
        map.put("orderCondition",orderCondition);
        map.put("msgId",msgId);
        int insert = getSqlSession().insert("com.damai.com.concert.test.dto.NewOrderDTOMapper.insertIntoNewOrder", map);
        if(logger.isDebugEnabled()){
            logger.debug("insertNewOrder() end  insert=="+insert);
        }
    }

    @Override
    public void insertSubOrder(Integer hisId,Integer orderId) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("insertSubOrder() start hisId  / orderId =="+hisId+"/"+orderId);
        }
        Map<String, Object> map = new HashMap<>();
        map.put("hisId",hisId);
        map.put("orderId",orderId);
        int insert = getSqlSession().insert("com.damai.com.concert.test.dto.NewOrderDTOMapper.insertIntoSubOrder", map);

        if(logger.isDebugEnabled()){
            logger.debug("insertSubOrder() end insert=="+insert);
        }
    }

    @Override
    public List<SubOrderDTO> querySubOrderByOrderId(Integer orderId) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("querySubOrderByOrderId() start orderId=="+orderId);
        }

        List<SubOrderDTO> subOrderDTOList = getSqlSession().selectList("com.damai.com.concert.test.dto.NewOrderDTOMapper.querySubOrderByOrderId", orderId);

        if(logger.isDebugEnabled()){
            logger.debug("querySubOrderByOrderId() end orderId=="+subOrderDTOList);
        }
        return subOrderDTOList;
    }
}
