package com.damai.concert.service.impl;

import com.damai.concert.dao.IUserDAO;
import com.damai.concert.dto.UserDTO;
import com.damai.concert.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2018\4\10 0010.
 */
@Service
public class UserService implements IUserService {

    @Autowired
    private IUserDAO userDAO;

    public List<UserDTO> queryAll(){
        return userDAO.queryAll();
    }

    public UserDTO queryUser(String username){
        return userDAO.queryUser(username);
    }

}
