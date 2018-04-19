package com.damai.concert.dao.impl;

import com.damai.concert.dao.ISortDetailsDAO;
import com.damai.concert.dto.SortDetailsDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * Created by Teori on 2018/4/12.
 */
@Repository
public class SortDetailsDAO extends SqlSessionDaoSupport implements ISortDetailsDAO {


    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    /** logger*/
    private static final Logger logger = LoggerFactory.getLogger(AssortmentDAO.class);

    /**
     * 查询所有商品最低价格信息
     * @param sortId
     * @return
     */
    @Override
    public List<SortDetailsDTO> querySortDetails(Integer sortId, Date time, Integer pageNum) throws Exception {
        if (logger.isDebugEnabled()){
            logger.debug("queryAssortment start");
        }

        HashMap<String, Object> map = new HashMap<>();
        map.put("sortId",sortId);
        map.put("time",time);
        map.put("pageNum",pageNum);

        List<SortDetailsDTO> sortDetailsList = getSqlSession().selectList("com.damai.concert.dto.SortDetailsMapper.querySortDetails" ,map);



        if (logger.isDebugEnabled()){
            logger.debug("queryAssortment end sortDetailsList ==" + sortDetailsList);
        }
        return sortDetailsList;
    }
}