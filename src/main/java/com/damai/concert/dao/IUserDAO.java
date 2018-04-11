package com.damai.concert.dao;



import com.damai.concert.dto.UserDTO;

import java.util.List;

/**
 * Created by 王明 on 2018/4/9.
 */
public interface IUserDAO {

    List<UserDTO> queryAll();

    UserDTO queryUser(String username);
}
