package com.damai.concert.dto.placevo;

import java.io.Serializable;

/**
 * Created by 王明 on 2018/4/18.
 */
public class PlaceVO implements Serializable{
    private Integer placeId;
    private String placeName;

    @Override
    public String toString() {
        return "PlaceVO{" +
                "placeId=" + placeId +
                ", placeName='" + placeName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PlaceVO placeVO = (PlaceVO) o;

        if (placeId != null ? !placeId.equals(placeVO.placeId) : placeVO.placeId != null) return false;
        return placeName != null ? placeName.equals(placeVO.placeName) : placeVO.placeName == null;

    }

    @Override
    public int hashCode() {
        int result = placeId != null ? placeId.hashCode() : 0;
        result = 31 * result + (placeName != null ? placeName.hashCode() : 0);
        return result;
    }

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
}
