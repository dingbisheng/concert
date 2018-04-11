package com.damai.concert.dao.impl;

import com.damai.concert.dao.IUserDAO;
import com.damai.concert.dto.UserDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by 王明 on 2018/4/9.
 */
@Repository
public class UserDAO extends SqlSessionDaoSupport implements IUserDAO {

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    /**
     * 查询所有用户
     * @return
     */
    @Override
    public List<UserDTO> queryAll() throws Exception{
        return getSqlSession().selectList("com.damai.concert.dao.UserMapper.queryAll");
    }

    /**
     * 根据用户名查询用户
     * @param username
     * @return
     */
    @Override
    public UserDTO queryUser(String username)throws Exception {
        return getSqlSession().selectOne("com.damai.concert.dao.UserMapper.queryUser",username);
    }

    /**
     * 用户新增，对应用户注册
     * @param username
     * @param password 密文
     */
    @Override
    public void addUser(String username, String password)throws Exception {
        Map<String, String> hashMap = new HashMap<>();
        hashMap.put("username",username);
        hashMap.put("password",password);
        getSqlSession().insert("com.damai.concert.dao.UserMapper.addUser", hashMap);
    }

    /**
     * 根据用户id更新用户数据
     * @param username
     * @param password
     * @param id
     */
    @Override
    public void updateUser(String username, String password,String id) throws Exception{
        Map<String, String> hashMap = new HashMap<>();
        hashMap.put("username",username);
        hashMap.put("password",password);
        hashMap.put("id",id);
        getSqlSession().update("com.damai.concert.dao.UserMapper.updateUser", hashMap);
    }

    /**
     * 根据用户id删除用户
     * @param id
     */
    @Override
    public void deleteUser(Integer id)throws Exception {
        getSqlSession().delete("com.damai.concert.dao.UserMapper.deleteUser",id);
    }


}
