package com.damai.concert.dto;

import com.damai.concert.dto.msgvo.MsgVO;
import com.damai.concert.dto.placevo.PlaceVO;

import java.io.Serializable;

/**
 * Created by Administrator on 2018\4\18 0018.
 */
public class SubOrderDTO implements Serializable{
    public static final Long serialVersionUID = 1L;
	
	private Integer subOrderId;
    private PlaceVO placeVO;
    private Integer seatRow;
    private Integer seatCol;
    private Integer seatPrice;
    private MsgVO msgVO;

    @Override
    public String toString() {
        return "SubOrderDTO{" +
                "subOrderId=" + subOrderId +
                ", placeVO=" + placeVO +
                ", seatRow=" + seatRow +
                ", seatCol=" + seatCol +
                ", seatPrice=" + seatPrice +
                ", msgVO=" + msgVO +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        SubOrderDTO that = (SubOrderDTO) o;

        if (subOrderId != null ? !subOrderId.equals(that.subOrderId) : that.subOrderId != null) {
            return false;
        }
        if (placeVO != null ? !placeVO.equals(that.placeVO) : that.placeVO != null) {
            return false;
        }
        if (seatRow != null ? !seatRow.equals(that.seatRow) : that.seatRow != null) {
            return false;
        }
        if (seatCol != null ? !seatCol.equals(that.seatCol) : that.seatCol != null) {
            return false;
        }
        if (seatPrice != null ? !seatPrice.equals(that.seatPrice) : that.seatPrice != null) {
            return false;
        }
        return msgVO != null ? msgVO.equals(that.msgVO) : that.msgVO == null;

    }

    @Override
    public int hashCode() {
        int result = subOrderId != null ? subOrderId.hashCode() : 0;
        result = 31 * result + (placeVO != null ? placeVO.hashCode() : 0);
        result = 31 * result + (seatRow != null ? seatRow.hashCode() : 0);
        result = 31 * result + (seatCol != null ? seatCol.hashCode() : 0);
        result = 31 * result + (seatPrice != null ? seatPrice.hashCode() : 0);
        result = 31 * result + (msgVO != null ? msgVO.hashCode() : 0);
        return result;
    }

    public Integer getSubOrderId() {
        return subOrderId;
    }

    public void setSubOrderId(Integer subOrderId) {
        this.subOrderId = subOrderId;
    }

    public PlaceVO getPlaceVO() {
        return placeVO;
    }

    public void setPlaceVO(PlaceVO placeVO) {
        this.placeVO = placeVO;
    }

    public Integer getSeatRow() {
        return seatRow;
    }

    public void setSeatRow(Integer seatRow) {
        this.seatRow = seatRow;
    }

    public Integer getSeatCol() {
        return seatCol;
    }

    public void setSeatCol(Integer seatCol) {
        this.seatCol = seatCol;
    }

    public Integer getSeatPrice() {
        return seatPrice;
    }

    public void setSeatPrice(Integer seatPrice) {
        this.seatPrice = seatPrice;
    }

    public MsgVO getMsgVO() {
        return msgVO;
    }

    public void setMsgVO(MsgVO msgVO) {
        this.msgVO = msgVO;
    }
}
