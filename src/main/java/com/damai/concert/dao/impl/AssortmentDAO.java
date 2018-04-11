package com.damai.concert.dao.impl;

import com.damai.concert.dao.IAssortmentDAO;
import com.damai.concert.dto.AssortmentDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

/**
 * 首页总分类
 * Created by zhangjie on 2018/4/10.
 */
@Repository
public class AssortmentDAO extends SqlSessionDaoSupport implements IAssortmentDAO {

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    /** logger*/
    private static final Logger logger = LoggerFactory.getLogger(AssortmentDAO.class);

    /**
     * 查询首页的分类
     * @return
     */
    public List<AssortmentDTO> queryAssortment() {
        if (logger.isDebugEnabled()){
            logger.debug("queryAssortment start");
        }
        List<AssortmentDTO> assortmentDTOList = getSqlSession().selectList("com.damai.concert.dto.AssortmentMapper.queryAssortment");
        if (logger.isDebugEnabled()){
            logger.debug("queryAssortment end");
        }
        return assortmentDTOList;
    }

    /**
     * 增加首页类别
     * @param assortmentDTO
     */
    public void save(AssortmentDTO assortmentDTO) {
        if(logger.isDebugEnabled()){
            logger.debug("save()    assortmentDTO =="+assortmentDTO);
        }
        getSqlSession().insert("com.damai.concert.dto.AssortmentMapper.save",assortmentDTO);

        if(logger.isDebugEnabled()){
            logger.debug("save() end ");
        }

    }

    /**
     * 修改首页的内容
     * @param newName
     * @param oldName
     */
    public void update(String newName,String oldName) {
        if(logger.isDebugEnabled()){
            logger.debug("update(String newName,String oldName) start newName + oldName=="+ newName + oldName);
        }
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put("newName",newName);
        hashMap.put("oldName",oldName);
        getSqlSession().insert("com.damai.concert.dto.AssortmentMapper.update",hashMap);
        if(logger.isDebugEnabled()){
            logger.debug("update(String newName,String oldName) end");
        }

    }

    /**
     * 根据sortId删除首页内容
     * @param sortId
     */
    public void delete(Integer sortId){
        if(logger.isDebugEnabled()){
            logger.debug("delete(Integer sortId) start =="+sortId);
        }
        getSqlSession().delete("com.damai.concert.dto.AssortmentMapper.delete",sortId);

        if(logger.isDebugEnabled()){
            logger.debug("delete(Integer sortId) end");
        }
    }
}
