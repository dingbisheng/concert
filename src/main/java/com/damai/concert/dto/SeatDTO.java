package com.damai.concert.dto;

import java.io.Serializable;

/**
 * Created by Administrator on 2018/4/14.
 */
public class SeatDTO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer seatId ;
    private Integer seatCol ;
    private Integer seatRow ;
    private Integer seatPrice;
    private Integer seatState;
    private String seatImg;

    public Integer getSeatId() {
        return seatId;
    }

    public void setSeatId(Integer seatId) {
        this.seatId = seatId;
    }

    public Integer getSeatCol() {
        return seatCol;
    }

    public void setSeatCol(Integer seatCol) {
        this.seatCol = seatCol;
    }

    public Integer getSeatRow() {
        return seatRow;
    }

    public void setSeatRow(Integer seatRow) {
        this.seatRow = seatRow;
    }

    public Integer getSeatPrice() {
        return seatPrice;
    }

    public void setSeatPrice(Integer seatPrice) {
        this.seatPrice = seatPrice;
    }

    public Integer getSeatState() {
        return seatState;
    }

    public void setSeatState(Integer seatState) {
        this.seatState = seatState;
    }

    public String getSeatImg() {
        return seatImg;
    }

    public void setSeatImg(String seatImg) {
        this.seatImg = seatImg;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SeatDTO seatDTO = (SeatDTO) o;

        if (seatId != null ? !seatId.equals(seatDTO.seatId) : seatDTO.seatId != null) return false;
        if (seatCol != null ? !seatCol.equals(seatDTO.seatCol) : seatDTO.seatCol != null) return false;
        if (seatRow != null ? !seatRow.equals(seatDTO.seatRow) : seatDTO.seatRow != null) return false;
        if (seatPrice != null ? !seatPrice.equals(seatDTO.seatPrice) : seatDTO.seatPrice != null) return false;
        if (seatState != null ? !seatState.equals(seatDTO.seatState) : seatDTO.seatState != null) return false;
        return seatImg != null ? seatImg.equals(seatDTO.seatImg) : seatDTO.seatImg == null;

    }

    @Override
    public int hashCode() {
        int result = seatId != null ? seatId.hashCode() : 0;
        result = 31 * result + (seatCol != null ? seatCol.hashCode() : 0);
        result = 31 * result + (seatRow != null ? seatRow.hashCode() : 0);
        result = 31 * result + (seatPrice != null ? seatPrice.hashCode() : 0);
        result = 31 * result + (seatState != null ? seatState.hashCode() : 0);
        result = 31 * result + (seatImg != null ? seatImg.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "SeatDTO{" +
                "seatId=" + seatId +
                ", seatCol=" + seatCol +
                ", seatRow=" + seatRow +
                ", seatPrice=" + seatPrice +
                ", seatState=" + seatState +
                ", seatImg='" + seatImg + '\'' +
                '}';
    }
}
