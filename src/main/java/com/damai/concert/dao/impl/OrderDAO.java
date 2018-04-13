package com.damai.concert.dao.impl;

import com.damai.concert.dao.IOrderDAO;
import com.damai.concert.dto.OrderDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.log4j.Logger;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by 王明 on 2018/4/12.
 */
@Repository
public class OrderDAO extends SqlSessionDaoSupport implements IOrderDAO {

    /** logger */
    private static final Logger logger = Logger.getLogger(OrderDAO.class);

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    @Override
    public List<OrderDTO> queryOrders(String username) {
        logger.info(username);
        return getSqlSession().selectList("com.damai.concert.dto.OrderMapper.queryOrders",username);
    }



}
