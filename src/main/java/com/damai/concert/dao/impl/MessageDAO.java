package com.damai.concert.dao.impl;


import com.damai.concert.dao.IMessageDAO;
import com.damai.concert.dto.AssortmentDTO;
import com.damai.concert.dto.MessageDTO;
import com.damai.concert.dto.SubclassDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2018/4/10.
 */
@Repository
public class MessageDAO extends SqlSessionDaoSupport implements IMessageDAO {

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }


    /**
     * 根据分类名称查询子类
     * @param sortName
     * @return
     */
    @Transactional
    public List<SubclassDTO> querySubclass(String sortName) {
        List<SubclassDTO> subclassDTOList = getSqlSession().selectList("com.damai.concert.dto.AssortmentMapper.querySubclass", sortName);
        return subclassDTOList;
    }



}
