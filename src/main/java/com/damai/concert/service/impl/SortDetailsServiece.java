package com.damai.concert.service.impl;

import com.damai.concert.dao.ISortDetailsDAO;
import com.damai.concert.service.ISortDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by Teori on 2018/4/12.
 */
@Service
public class SortDetailsServiece implements ISortDetailsService{

    @Autowired
    private ISortDetailsDAO sortDetailsDAO;

    @Override
    public List<Object> querySortDetails(Integer sortId,Date time,Integer pageNum) throws Exception{
        return sortDetailsDAO.querySortDetails(sortId,time,pageNum);
    }
}