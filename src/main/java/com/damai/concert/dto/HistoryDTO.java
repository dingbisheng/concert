package com.damai.concert.dto;

import java.io.Serializable;
import java.util.List;

/**
 * Created by Administrator on 2018/4/14.
 */
public class HistoryDTO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer hisId ;
    private Integer hisState ;
    private SeatDTO seatDTO;

    public SeatDTO getSeatDTO() {
        return seatDTO;
    }

    public void setSeatDTO(SeatDTO seatDTO) {
        this.seatDTO = seatDTO;
    }

    @Override
    public String toString() {
        return "HistoryDTO{" +
                "hisId=" + hisId +
                ", hisState=" + hisState +
                '}';
    }

    @Override
    public boolean equals(Object o) {

        if (this == o) return true;
        if (!(o instanceof HistoryDTO)) return false;

        HistoryDTO that = (HistoryDTO) o;

        if (hisId != null ? !hisId.equals(that.hisId) : that.hisId != null) return false;
        return hisState != null ? hisState.equals(that.hisState) : that.hisState == null;

    }

    @Override
    public int hashCode() {
        int result = hisId != null ? hisId.hashCode() : 0;
        result = 31 * result + (hisState != null ? hisState.hashCode() : 0);
        return result;
    }

    public Integer getHisId() {

        return hisId;
    }

    public void setHisId(Integer hisId) {
        this.hisId = hisId;
    }

    public Integer getHisState() {
        return hisState;
    }

    public void setHisState(Integer hisState) {
        this.hisState = hisState;
    }
}
