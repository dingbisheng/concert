package com.damai.concert.dto;

import java.io.Serializable;
import java.util.List;

/**
 * 演唱会的信息
 * Created by Administrator on 2018/4/10.
 */
public class MessageDTO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer mesId ;
    private String mesName ;
    private String mesPhoto ;
    private String mesTime ;
    private String mesExplain ;
    private CityDTO cityDTO ;
    private PlaceDTO placeDTO ;
    private List<MesDetDTO> mesDetList ;
    private List<MessageInfoDTO> messageInfoDTOList ;

    public List<MessageInfoDTO> getMessageInfoDTOList() {
        return messageInfoDTOList;
    }

    public void setMessageInfoDTOList(List<MessageInfoDTO> messageInfoDTOList) {
        this.messageInfoDTOList = messageInfoDTOList;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof MessageDTO)) return false;

        MessageDTO that = (MessageDTO) o;

        if (!mesId.equals(that.mesId)) return false;
        if (!mesName.equals(that.mesName)) return false;
        if (!mesPhoto.equals(that.mesPhoto)) return false;
        if (!mesTime.equals(that.mesTime)) return false;
        return mesExplain.equals(that.mesExplain);

    }

    @Override
    public int hashCode() {
        int result = mesId.hashCode();
        result = 31 * result + mesName.hashCode();
        result = 31 * result + mesPhoto.hashCode();
        result = 31 * result + mesTime.hashCode();
        result = 31 * result + mesExplain.hashCode();
        return result;
    }

    public CityDTO getCityDTO() {
        return cityDTO;
    }

    public void setCityDTO(CityDTO cityDTO) {
        this.cityDTO = cityDTO;
    }

    public PlaceDTO getPlaceDTO() {
        return placeDTO;
    }

    public void setPlaceDTO(PlaceDTO placeDTO) {
        this.placeDTO = placeDTO;
    }

    public List<MesDetDTO> getMesDetList() {
        return mesDetList;
    }

    public void setMesDetList(List<MesDetDTO> mesDetList) {
        this.mesDetList = mesDetList;
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

    public String getMesExplain() {
        return mesExplain;
    }

    public void setMesExplain(String mesExplain) {
        this.mesExplain = mesExplain;
    }


}
