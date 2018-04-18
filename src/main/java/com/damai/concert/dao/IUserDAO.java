package com.damai.concert.dao;



import com.damai.concert.dto.UserDTO;

import java.util.List;

/**
 * Created by 王明 on 2018/4/9.
 */
public interface IUserDAO {

    List<UserDTO> queryAll()throws Exception;

    UserDTO queryUser(String username)throws Exception;

    Integer queryUserNum() throws Exception;

    void addUser(String username,String password)throws Exception;

    void updateUser(String username,String password,String id)throws Exception;

    void deleteUser(Integer id)throws Exception;
}
