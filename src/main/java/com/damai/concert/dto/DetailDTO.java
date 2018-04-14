package com.damai.concert.dto;

import java.io.Serializable;

/**
 * Created by Administrator on 2018/4/14.
 */
public class DetailDTO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer detailId ;
    private String detailName ;
    private String detailColor ;

    @Override
    public String toString() {
        return "DetailDTO{" +
                "detailId=" + detailId +
                ", detailName='" + detailName + '\'' +
                ", detailColor='" + detailColor + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DetailDTO)) return false;

        DetailDTO detailDTO = (DetailDTO) o;

        if (detailId != null ? !detailId.equals(detailDTO.detailId) : detailDTO.detailId != null) return false;
        if (detailName != null ? !detailName.equals(detailDTO.detailName) : detailDTO.detailName != null) return false;
        return detailColor != null ? detailColor.equals(detailDTO.detailColor) : detailDTO.detailColor == null;

    }

    @Override
    public int hashCode() {
        int result = detailId != null ? detailId.hashCode() : 0;
        result = 31 * result + (detailName != null ? detailName.hashCode() : 0);
        result = 31 * result + (detailColor != null ? detailColor.hashCode() : 0);
        return result;
    }

    public Integer getDetailId() {

        return detailId;
    }

    public void setDetailId(Integer detailId) {
        this.detailId = detailId;
    }

    public String getDetailName() {
        return detailName;
    }

    public void setDetailName(String detailName) {
        this.detailName = detailName;
    }

    public String getDetailColor() {
        return detailColor;
    }

    public void setDetailColor(String detailColor) {
        this.detailColor = detailColor;
    }
}
