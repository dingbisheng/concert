package com.damai.concert.service;

import com.damai.concert.dto.ManagerDTO;

import java.util.List;

/**
 * Created by Administrator on 2018\4\12 0012.
 */
public interface IManagerService {

    ManagerDTO queryManagerDTOByName(String username) throws Exception;

    List<String> queryManagerRoleList(String username) throws Exception;

    List<String> queryManagerPermissionList(String username) throws Exception;

}
