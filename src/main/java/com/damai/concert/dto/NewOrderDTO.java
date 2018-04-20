package com.damai.concert.dto;

import com.damai.concert.dto.msgvo.MsgVO;

import java.io.Serializable;

/**
 * Created by Vincent on 2018\4\18 0018.
 */
public class NewOrderDTO implements Serializable{
    public static final Long serialVersionUID = 1L;

    private Integer orderId;
    private String orderNum;
    private MsgVO msgVO;
    private String username;
    private Integer orderPrice;
    private Integer orderCondition;

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public String getOrderNum() {
        return orderNum;
    }

    public void setOrderNum(String orderNum) {
        this.orderNum = orderNum;
    }

    public MsgVO getMsgVO() {
        return msgVO;
    }

    public void setMsgVO(MsgVO msgVO) {
        this.msgVO = msgVO;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getOrderPrice() {
        return orderPrice;
    }

    public void setOrderPrice(Integer orderPrice) {
        this.orderPrice = orderPrice;
    }

    public Integer getOrderCondition() {
        return orderCondition;
    }

    public void setOrderCondition(Integer orderCondition) {
        this.orderCondition = orderCondition;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        NewOrderDTO that = (NewOrderDTO) o;

        if (orderId != null ? !orderId.equals(that.orderId) : that.orderId != null) return false;
        if (orderNum != null ? !orderNum.equals(that.orderNum) : that.orderNum != null) return false;
        if (msgVO != null ? !msgVO.equals(that.msgVO) : that.msgVO != null) return false;
        if (username != null ? !username.equals(that.username) : that.username != null) return false;
        if (orderPrice != null ? !orderPrice.equals(that.orderPrice) : that.orderPrice != null) return false;
        return orderCondition != null ? orderCondition.equals(that.orderCondition) : that.orderCondition == null;

    }

    @Override
    public int hashCode() {
        int result = orderId != null ? orderId.hashCode() : 0;
        result = 31 * result + (orderNum != null ? orderNum.hashCode() : 0);
        result = 31 * result + (msgVO != null ? msgVO.hashCode() : 0);
        result = 31 * result + (username != null ? username.hashCode() : 0);
        result = 31 * result + (orderPrice != null ? orderPrice.hashCode() : 0);
        result = 31 * result + (orderCondition != null ? orderCondition.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "NewOrderDTO{" +
                "orderId=" + orderId +
                ", orderNum='" + orderNum + '\'' +
                ", msgVO=" + msgVO +
                ", username='" + username + '\'' +
                ", orderPrice=" + orderPrice +
                ", orderCondition=" + orderCondition +
                '}';
    }
}