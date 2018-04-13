package com.damai.concert.service.impl;

import com.damai.concert.dao.IOrderDAO;
import com.damai.concert.dto.OrderDTO;
import com.damai.concert.service.IOrderService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by 王明 on 2018/4/12.
 */
@Service
public class OrderService implements IOrderService{

    /** logger */
    private static final Logger logger = Logger.getLogger(OrderService.class);

    @Autowired
    private IOrderDAO orderDAO;

    @Override
    public List<OrderDTO> queryOrders(String username) {
        List<OrderDTO> list = orderDAO.queryOrders(username);
        for (OrderDTO orderDTO:list){
            logger.info(orderDTO.toString());
            logger.info(orderDTO.getMessageDTO().getMesName());
        }
        return list;
    }
}
