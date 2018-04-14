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

    @Override
    public String toString() {
        return "SeatDTO{" +
                "seatId=" + seatId +
                ", seatCol=" + seatCol +
                ", seatRow=" + seatRow +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SeatDTO)) return false;

        SeatDTO seatDTO = (SeatDTO) o;

        if (seatId != null ? !seatId.equals(seatDTO.seatId) : seatDTO.seatId != null) return false;
        if (seatCol != null ? !seatCol.equals(seatDTO.seatCol) : seatDTO.seatCol != null) return false;
        return seatRow != null ? seatRow.equals(seatDTO.seatRow) : seatDTO.seatRow == null;

    }

    @Override
    public int hashCode() {
        int result = seatId != null ? seatId.hashCode() : 0;
        result = 31 * result + (seatCol != null ? seatCol.hashCode() : 0);
        result = 31 * result + (seatRow != null ? seatRow.hashCode() : 0);
        return result;
    }

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
}
