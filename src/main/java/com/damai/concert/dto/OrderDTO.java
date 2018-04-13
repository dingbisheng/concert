package com.damai.concert.dto;

import java.io.Serializable;

/**
 * Created by 王明 on 2018/4/12.
 */
public class OrderDTO implements Serializable{

    public static final Long serialVersionUID = 1L;

    private Integer orderId;
    //订单价格
    private String orderPrice;
    //订单时间
    private String orderTime;
    //订票数量
    private Integer orderSeatNum;
    //订单编号
    private String orderNum;
    //订单总价
    private String orderTotalPrice;
    //订单状态
    private String orderCondition;

    private UserDTO userDTO;

    private MessageDTO messageDTO;

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }

    public MessageDTO getMessageDTO() {
        return messageDTO;
    }

    public void setMessageDTO(MessageDTO messageDTO) {
        this.messageDTO = messageDTO;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(String orderPrice) {
        this.orderPrice = orderPrice;
    }

    public String getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(String orderTime) {
        this.orderTime = orderTime;
    }

    public Integer getOrderSeatNum() {
        return orderSeatNum;
    }

    public void setOrderSeatNum(Integer orderSeatNum) {
        this.orderSeatNum = orderSeatNum;
    }

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum;
    }

    public String getOrderTotalPrice() {
        return orderTotalPrice;
    }

    public void setOrderTotalPrice(String orderTotalPrice) {
        this.orderTotalPrice = orderTotalPrice;
    }

    public String getOrderCondition() {
        return orderCondition;
    }

    public void setOrderCondition(String orderCondition) {
        this.orderCondition = orderCondition;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        OrderDTO orderDTO = (OrderDTO) o;

        if (orderId != null ? !orderId.equals(orderDTO.orderId) : orderDTO.orderId != null) return false;
        if (orderPrice != null ? !orderPrice.equals(orderDTO.orderPrice) : orderDTO.orderPrice != null) return false;
        if (orderTime != null ? !orderTime.equals(orderDTO.orderTime) : orderDTO.orderTime != null) return false;
        if (orderSeatNum != null ? !orderSeatNum.equals(orderDTO.orderSeatNum) : orderDTO.orderSeatNum != null)
            return false;
        if (orderNum != null ? !orderNum.equals(orderDTO.orderNum) : orderDTO.orderNum != null) return false;
        if (orderTotalPrice != null ? !orderTotalPrice.equals(orderDTO.orderTotalPrice) : orderDTO.orderTotalPrice != null)
            return false;
        return orderCondition != null ? orderCondition.equals(orderDTO.orderCondition) : orderDTO.orderCondition == null;

    }

    @Override
    public int hashCode() {
        int result = orderId != null ? orderId.hashCode() : 0;
        result = 31 * result + (orderPrice != null ? orderPrice.hashCode() : 0);
        result = 31 * result + (orderTime != null ? orderTime.hashCode() : 0);
        result = 31 * result + (orderSeatNum != null ? orderSeatNum.hashCode() : 0);
        result = 31 * result + (orderNum != null ? orderNum.hashCode() : 0);
        result = 31 * result + (orderTotalPrice != null ? orderTotalPrice.hashCode() : 0);
        result = 31 * result + (orderCondition != null ? orderCondition.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "OrderDTO{" +
                "orderId=" + orderId +
                ", orderPrice='" + orderPrice + '\'' +
                ", orderTime='" + orderTime + '\'' +
                ", orderSeatNum=" + orderSeatNum +
                ", orderNum='" + orderNum + '\'' +
                ", orderTotalPrice='" + orderTotalPrice + '\'' +
                ", orderCondition='" + orderCondition + '\'' +
                '}';
    }
}
