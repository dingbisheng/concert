package com.damai.concert.dao.impl;

import com.damai.concert.dao.IAssortmentDAO;
import com.damai.concert.dto.AssortmentDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

/**
 * Created by Administrator on 2018/4/10.
 */
@Repository
public class AssortmentDAO extends SqlSessionDaoSupport implements IAssortmentDAO {

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    public List<AssortmentDTO> queryAssortment() {
        List<AssortmentDTO> assortmentDTOList = getSqlSession().selectList("com.damai.concert.dto.AssortmentMapper.queryAssortment");
        return assortmentDTOList;
    }


    public void save(AssortmentDTO assortmentDTO) {
        getSqlSession().insert("com.damai.concert.dto.AssortmentMapper.save",assortmentDTO);
    }


    public void update(String newName,String oldName) {
        HashMap<String, String> hashMap = new HashMap<>();
        hashMap.put("newName",newName);
        hashMap.put("oldName",oldName);
        getSqlSession().insert("com.damai.concert.dto.AssortmentMapper.update",hashMap);
    }


    public void delete(Integer sortId){
        getSqlSession().delete("com.damai.concert.dto.AssortmentMapper.delete",sortId);
    }
}
