package com.damai.concert.service;

import com.damai.concert.dto.UserDTO;

import java.util.List;

/**
 * Created by Administrator on 2018\4\10 0010.
 */
public interface IUserService {

    List<UserDTO> queryAll();

    UserDTO queryUser(String username);
}
