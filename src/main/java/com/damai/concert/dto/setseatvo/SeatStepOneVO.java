package com.damai.concert.dto.setseatvo;

/**
 * 录入座位图使用的座位实体
 * Created by Vincent on 2018\4\12 0012.
 */
public class SeatStepOneVO {

    public static final Long serialVersionUID = 1L;

    private Integer row;
    private Integer col;
    private String hasSeatImage;
    private String noneSeatImage;

    public Integer getRow() {
        return row;
    }

    public void setRow(Integer row) {
        this.row = row;
    }

    public Integer getCol() {
        return col;
    }

    public void setCol(Integer col) {
        this.col = col;
    }

    public String getHasSeatImage() {
        return hasSeatImage;
    }

    public void setHasSeatImage(String hasSeatImage) {
        this.hasSeatImage = hasSeatImage;
    }

    public String getNoneSeatImage() {
        return noneSeatImage;
    }

    public void setNoneSeatImage(String noneSeatImage) {
        this.noneSeatImage = noneSeatImage;
    }

    @Override
    public String toString() {
        return "SeatStepOneVO{" +
                "row=" + row +
                ", col=" + col +
                ", hasSeatImage='" + hasSeatImage + '\'' +
                ", noneSeatImage='" + noneSeatImage + '\'' +
                '}';
    }
}
