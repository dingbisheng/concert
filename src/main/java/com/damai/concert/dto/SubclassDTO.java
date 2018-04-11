package com.damai.concert.dto;

import java.io.Serializable;
import java.util.List;

/**子类实体
 * Created by Administrator on 2018/4/10.
 */
public class SubclassDTO implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer subId ;
    private String subName ;
    private List<MessageDTO> messageDTOList ;


    public List<MessageDTO> getMessageDTOList() {

        return messageDTOList;
    }

    public void setMessageDTOList(List<MessageDTO> messageDTOList) {
        this.messageDTOList = messageDTOList;
    }

    public Integer getSubId() {
        return subId;
    }

    public void setSubId(Integer subId) {
        this.subId = subId;
    }

    public String getSubName() {
        return subName;
    }

    public void setSubName(String subName) {
        this.subName = subName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof SubclassDTO)) return false;

        SubclassDTO that = (SubclassDTO) o;

        if (!subId.equals(that.subId)) return false;
        return subName.equals(that.subName);

    }

    @Override
    public int hashCode() {
        int result = subId.hashCode();
        result = 31 * result + subName.hashCode();
        return result;
    }
}
