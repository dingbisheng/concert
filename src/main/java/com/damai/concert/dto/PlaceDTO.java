package com.damai.concert.dto;

import java.io.Serializable;

/**
 * 演唱地点实体介绍
 * Created by Administrator on 2018/4/10.
 */
public class PlaceDTO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer placeId ;
    private String placeName ;
    private String placePhoto ;
    private String placeExplain ;

    public Integer getPlaceId() {
        return placeId;
    }

    public void setPlaceId(Integer placeId) {
        this.placeId = placeId;
    }

    public String getPlaceName() {
        return placeName;
    }

    public void setPlaceName(String placeName) {
        this.placeName = placeName;
    }

    public String getPlacePhoto() {
        return placePhoto;
    }

    public void setPlacePhoto(String placePhoto) {
        this.placePhoto = placePhoto;
    }

    public String getPlaceExplain() {
        return placeExplain;
    }

    public void setPlaceExplain(String placeExplain) {
        this.placeExplain = placeExplain;
    }

    @Override
    public String toString() {
        return "PlaceDTO{" +
                "placeId=" + placeId +
                ", placeName='" + placeName + '\'' +
                ", placePhoto='" + placePhoto + '\'' +
                ", placeExplain='" + placeExplain + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PlaceDTO)) return false;

        PlaceDTO placeDTO = (PlaceDTO) o;

        if (!placeId.equals(placeDTO.placeId)) return false;
        if (!placeName.equals(placeDTO.placeName)) return false;
        if (!placePhoto.equals(placeDTO.placePhoto)) return false;
        return placeExplain.equals(placeDTO.placeExplain);

    }

    @Override
    public int hashCode() {
        int result = placeId.hashCode();
        result = 31 * result + placeName.hashCode();
        result = 31 * result + placePhoto.hashCode();
        result = 31 * result + placeExplain.hashCode();
        return result;
    }
}
