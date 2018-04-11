package com.damai.concert.dto;

import java.io.Serializable;
import java.util.List;

/**分类实体
 * Created by Administrator on 2018/4/10.
 */
public class AssortmentDTO implements Serializable{

    public static final Long serialVersionUID = 1L;

    private Integer sortId  ;
    
    private String sortName ;

    private List<SubclassDTO> subclassDTOList ;

    public List<SubclassDTO> getSubclassDTOList() {

        return subclassDTOList;
    }

    public void setSubclassDTOList(List<SubclassDTO> subclassDTOList) {
        this.subclassDTOList = subclassDTOList;
    }

    public Integer getSortId() {
        return sortId;
    }

    public void setSortId(Integer sortId) {
        this.sortId = sortId;
    }

    public String getSortName() {
        return sortName;
    }

    public void setSortName(String sortName) {
        this.sortName = sortName;
    }

    @Override
    public String toString() {
        return "AssortmentDTO{" +
                "sortId=" + sortId +
                ", sortName='" + sortName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof AssortmentDTO)) return false;

        AssortmentDTO that = (AssortmentDTO) o;

        if (!sortId.equals(that.sortId)) return false;
        return sortName.equals(that.sortName);

    }

    @Override
    public int hashCode() {
        int result = sortId.hashCode();
        result = 31 * result + sortName.hashCode();
        return result;
    }
}
