package com.damai.concert.dao;

import com.damai.concert.dto.ManagerDTO;

import java.util.List;

/**
 * Created by Administrator on 2018\4\11 0011.
 */
public interface IManagerDAO {

    ManagerDTO queryManagerDTOByName(String username) throws Exception;

    List<String> queryManagerRoleList(String username) throws Exception;

    List<String> queryManagerPermissionList(String username) throws Exception;

}
