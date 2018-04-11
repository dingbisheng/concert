package com.damai.concert.dto;

import java.io.Serializable;

/**
 * Created by Administrator on 2018/4/10.
 */
public class AssortmentDTO implements Serializable{

    public static final Long serialVersionUID = 1L;

    private Integer sortId  ;
    
    private String sortName ;

    public Integer getSortId() {
        return sortId;
    }

    public void setSortId(Integer sortId) {
        this.sortId = sortId;
    }

    public String getSortName() {
        return sortName;
    }

    public void setSortName(String sortName) {
        this.sortName = sortName;
    }
}
