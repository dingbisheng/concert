package com.damai.concert.service.impl;

import com.damai.concert.dao.INewOrderDAO;
import com.damai.concert.dto.NewOrderDTO;
import com.damai.concert.dto.SubOrderDTO;
import com.damai.concert.service.INewOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2018/4/19.
 */
@Service
public class NewOrderService implements INewOrderService {

    @Autowired
    private INewOrderDAO newOrderDAO;

    @Override
    public NewOrderDTO queryNewOrderByOrderId(Integer id) throws Exception {
        return newOrderDAO.queryNewOrderByOrderId(id);
    }

    @Override
    public List<NewOrderDTO> queryNewOrderListByUsername(String username) throws Exception {
        return newOrderDAO.queryNewOrderListByUsername(username);
    }

    @Override
    public NewOrderDTO queryNewOrderByOrderNum(String num) throws Exception {
        return newOrderDAO.queryNewOrderByOrderNum(num);
    }

    @Override
    public void insertNewOrder(String orderNum, String username, Integer orderPrice, Integer orderCondition, Integer msgId) throws Exception {
        newOrderDAO.insertNewOrder(orderNum, username, orderPrice, orderCondition, msgId);
    }

    @Override
    public void insertSubOrder(Integer hisId, Integer orderId) throws Exception {
        newOrderDAO.insertSubOrder(hisId, orderId);
    }

    @Override
    public void setOrderPaySuccessByOrderNum(String orderNum) throws Exception {
        newOrderDAO.setOrderPaySuccessByOrderNum(orderNum);
    }

    @Override
    public List<SubOrderDTO> querySubOrderByOrderId(Integer orderId) throws Exception {
        return newOrderDAO.querySubOrderByOrderId(orderId);
    }
}
