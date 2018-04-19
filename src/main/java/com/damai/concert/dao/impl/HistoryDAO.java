package com.damai.concert.dao.impl;

import com.damai.concert.dao.IHistoryDAO;
import com.damai.concert.dto.HistoryDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by 王明 on 2018/4/15.
 */
@Repository
public class HistoryDAO extends SqlSessionDaoSupport implements IHistoryDAO{

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }


    @Override
    public List<HistoryDTO> queryHistory(Integer mesId)throws Exception {
        return getSqlSession().selectList("com.damai.com.concert.test.dto.HistoryMapper.queryHistory",mesId);
    }
}
