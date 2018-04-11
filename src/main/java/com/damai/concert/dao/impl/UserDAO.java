package com.damai.concert.dao.impl;

import com.damai.concert.dao.IUserDAO;
import com.damai.concert.dto.UserDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by 王明 on 2018/4/9.
 */
@Repository
public class UserDAO extends SqlSessionDaoSupport implements IUserDAO {

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    @Override
    public List<UserDTO> queryAll() {
        return getSqlSession().selectList("com.damai.concert.dao.UserMapper.queryAll");
    }

    @Override
    public UserDTO queryUser(String username) {
        return getSqlSession().selectOne("com.damai.concert.dao.UserMapper.queryUser",username);
    }


}
