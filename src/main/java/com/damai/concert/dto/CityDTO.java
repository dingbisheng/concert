package com.damai.concert.dto;

import java.io.Serializable;

/**城市实体
 * Created by Administrator on 2018/4/10.
 */
public class CityDTO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer cityId ;
    private String cityName ;

    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof CityDTO)) return false;

        CityDTO cityDTO = (CityDTO) o;

        if (!cityId.equals(cityDTO.cityId)) return false;
        return cityName.equals(cityDTO.cityName);

    }

    @Override
    public int hashCode() {
        int result = cityId.hashCode();
        result = 31 * result + cityName.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "CityDTO{" +
                "cityId=" + cityId +
                ", cityName='" + cityName + '\'' +
                '}';
    }
}
