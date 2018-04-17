package com.damai.concert.dto;

import java.io.Serializable;

/**
 * Created by Teori on 2018/4/16.
 */

/**
 * 场次信息
 */
public class RondaMessage implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer mesId ;

    private String mesName ;

    private String mesPhoto ;

    private String mesTime ;

    private String mesExplain ;

    private String cityName;

    private String subName;

    private String placeName;

    private String price;

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getMesExplain() {
        return mesExplain;
    }

    public void setMesExplain(String mesExplain) {
        this.mesExplain = mesExplain;
    }

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

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public String getSubName() {
        return subName;
    }

    public void setSubName(String subName) {
        this.subName = subName;
    }

    @Override
    public String toString() {
        return "RondaMessage{" +
                "cityName='" + cityName + '\'' +
                ", mesId=" + mesId +
                ", mesName='" + mesName + '\'' +
                ", mesPhoto='" + mesPhoto + '\'' +
                ", mesTime='" + mesTime + '\'' +
                ", mesExplain='" + mesExplain + '\'' +
                ", subName='" + subName + '\'' +
                ", placeName='" + placeName + '\'' +
                ", price='" + price + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RondaMessage that = (RondaMessage) o;

        if (mesId != null ? !mesId.equals(that.mesId) : that.mesId != null) return false;
        if (mesName != null ? !mesName.equals(that.mesName) : that.mesName != null) return false;
        if (mesPhoto != null ? !mesPhoto.equals(that.mesPhoto) : that.mesPhoto != null) return false;
        if (mesTime != null ? !mesTime.equals(that.mesTime) : that.mesTime != null) return false;
        if (mesExplain != null ? !mesExplain.equals(that.mesExplain) : that.mesExplain != null) return false;
        if (cityName != null ? !cityName.equals(that.cityName) : that.cityName != null) return false;
        if (subName != null ? !subName.equals(that.subName) : that.subName != null) return false;
        if (placeName != null ? !placeName.equals(that.placeName) : that.placeName != null) return false;
        return price != null ? price.equals(that.price) : that.price == null;

    }

    @Override
    public int hashCode() {
        int result = mesId != null ? mesId.hashCode() : 0;
        result = 31 * result + (mesName != null ? mesName.hashCode() : 0);
        result = 31 * result + (mesPhoto != null ? mesPhoto.hashCode() : 0);
        result = 31 * result + (mesTime != null ? mesTime.hashCode() : 0);
        result = 31 * result + (mesExplain != null ? mesExplain.hashCode() : 0);
        result = 31 * result + (cityName != null ? cityName.hashCode() : 0);
        result = 31 * result + (subName != null ? subName.hashCode() : 0);
        result = 31 * result + (placeName != null ? placeName.hashCode() : 0);
        result = 31 * result + (price != null ? price.hashCode() : 0);
        return result;
    }
}
