package com.damai.concert.service;

import com.damai.concert.dto.UserDTO;

import java.util.List;

/**
 * Created by Administrator on 2018\4\10 0010.
 */
public interface IUserService {

    List<UserDTO> queryAll(Integer currPage,Integer pageSize)throws Exception;

    UserDTO queryUser(String username)throws Exception;

    void addUser(String username,String password)throws Exception;

    void updateUser(String username,String password,Integer id)throws Exception;

    void deleteUser(Integer id)throws Exception;
}
