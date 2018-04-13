package com.damai.concert.service;

import com.damai.concert.dto.OrderDTO;

import java.util.List;

/**
 * Created by 王明 on 2018/4/12.
 */
public interface IOrderService {

    List<OrderDTO> queryOrders(String username);
}
