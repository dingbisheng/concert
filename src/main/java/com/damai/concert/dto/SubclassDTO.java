package com.damai.concert.dto;

import java.io.Serializable;

/**
 * Created by Administrator on 2018/4/10.
 */
public class SubclassDTO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer subId ;
    private String subName ;

    public Integer getSubId() {
        return subId;
    }

    public void setSubId(Integer subId) {
        this.subId = subId;
    }

    public String getSubName() {
        return subName;
    }

    public void setSubName(String subName) {
        this.subName = subName;
    }
}
