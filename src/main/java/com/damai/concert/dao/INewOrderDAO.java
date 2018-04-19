package com.damai.concert.dao;

import com.damai.concert.dto.NewOrderDTO;
import com.damai.concert.dto.SubOrderDTO;

import java.util.List;

/**
 * Created by 王明 on 2018/4/18.
 */
public interface INewOrderDAO {

    NewOrderDTO queryNewOrderByOrderId(Integer id) throws Exception;

    List<NewOrderDTO> queryNewOrderListByUsername(String username) throws Exception;

    NewOrderDTO queryNewOrderByOrderNum(String num) throws Exception;

    void insertNewOrder(String orderNum,String username,Integer orderPrice,Integer orderCondition,Integer msgId) throws Exception;

    void insertSubOrder(Integer hisId,Integer orderId) throws Exception;

    List<SubOrderDTO> querySubOrderByOrderId(Integer orderId) throws Exception;

}
