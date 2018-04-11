package com.damai.concert.dto;

import java.io.Serializable;

/**
 * Created by Administrator on 2018/4/10.
 */
public class MessageDTO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer mesId ;
    private String mesName ;
    private String mesPhoto ;
    private String mesTime ;
    private String mesExplain ;

    public Integer getMesId() {
        return mesId;
    }

    public void setMesId(Integer mesId) {
        this.mesId = mesId;
    }

    public String getMesName() {
        return mesName;
    }

    public void setMesName(String mesName) {
        this.mesName = mesName;
    }

    public String getMesPhoto() {
        return mesPhoto;
    }

    public void setMesPhoto(String mesPhoto) {
        this.mesPhoto = mesPhoto;
    }

    public String getMesTime() {
        return mesTime;
    }

    public void setMesTime(String mesTime) {
        this.mesTime = mesTime;
    }

    public String getMesExplain() {
        return mesExplain;
    }

    public void setMesExplain(String mesExplain) {
        this.mesExplain = mesExplain;
    }
}
