package com.damai.concert.dto;

import java.io.Serializable;

/**
 * Created by Administrator on 2018/4/13.
 */
public class MessageInfoDTO implements Serializable {

    public static final Long  serialVersionUID = 1L;

    private Integer infoId ;
    private String infoName ;
    private String infoContent ;

    @Override
    public String toString() {
        return "MessageInfoDTO{" +
                "infoId=" + infoId +
                ", infoName='" + infoName + '\'' +
                ", infoContent='" + infoContent + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof MessageInfoDTO)) return false;

        MessageInfoDTO that = (MessageInfoDTO) o;

        if (infoId != null ? !infoId.equals(that.infoId) : that.infoId != null) return false;
        if (infoName != null ? !infoName.equals(that.infoName) : that.infoName != null) return false;
        return infoContent != null ? infoContent.equals(that.infoContent) : that.infoContent == null;

    }

    @Override
    public int hashCode() {
        int result = infoId != null ? infoId.hashCode() : 0;
        result = 31 * result + (infoName != null ? infoName.hashCode() : 0);
        result = 31 * result + (infoContent != null ? infoContent.hashCode() : 0);
        return result;
    }

    public Integer getInfoId() {

        return infoId;
    }

    public void setInfoId(Integer infoId) {
        this.infoId = infoId;
    }

    public String getInfoName() {
        return infoName;
    }

    public void setInfoName(String infoName) {
        this.infoName = infoName;
    }

    public String getInfoContent() {
        return infoContent;
    }

    public void setInfoContent(String infoContent) {
        this.infoContent = infoContent;
    }
}
