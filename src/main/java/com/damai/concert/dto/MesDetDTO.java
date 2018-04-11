package com.damai.concert.dto;

import java.io.Serializable;

/**演唱会与详情的中间信息 价格
 * Created by Administrator on 2018/4/10.
 */
public class MesDetDTO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer mdId ;
    private Integer mdPrice ;

    public Integer getMdId() {
        return mdId;
    }

    public void setMdId(Integer mdId) {
        this.mdId = mdId;
    }

    public Integer getMdPrice() {
        return mdPrice;
    }

    public void setMdPrice(Integer mdPrice) {
        this.mdPrice = mdPrice;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof MesDetDTO)) return false;

        MesDetDTO mesDetDTO = (MesDetDTO) o;

        if (!mdId.equals(mesDetDTO.mdId)) return false;
        return mdPrice.equals(mesDetDTO.mdPrice);

    }

    @Override
    public int hashCode() {
        int result = mdId.hashCode();
        result = 31 * result + mdPrice.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "MesDetDTO{" +
                "mdId=" + mdId +
                ", mdPrice=" + mdPrice +
                '}';
    }
}
