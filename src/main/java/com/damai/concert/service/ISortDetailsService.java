package com.damai.concert.service;

import com.damai.concert.dto.SortDetailsDTO;

import java.util.Date;
import java.util.List;

/**
 * Created by Teori on 2018/4/12.
 */
public interface ISortDetailsService {

    /**
     * 查询所有商品最低价格信息
     * @param sortId
     * @return
     */
    List<SortDetailsDTO> querySortDetails(Integer sortId, Date time, Integer pageNum) throws Exception;

}