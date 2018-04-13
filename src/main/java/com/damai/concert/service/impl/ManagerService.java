package com.damai.concert.service.impl;

import com.damai.concert.dao.IManagerDAO;
import com.damai.concert.dto.ManagerDTO;
import com.damai.concert.service.IManagerService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 管理员业务逻辑
 * Created by Vincent on 2018\4\12 0012.
 */
@Service
public class ManagerService implements IManagerService {

    public static final Logger logger = Logger.getLogger(ManagerService.class);

    @Autowired
    private IManagerDAO managerDAO;

    @Override
    public ManagerDTO queryManagerDTOByName(String username) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() start username =="+username);
        }
        ManagerDTO managerDTO = managerDAO.queryManagerDTOByName(username);
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() end managerDAO =="+managerDAO);
        }
        return managerDTO;
    }

    @Override
    public List<String> queryManagerRoleList(String username) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() start username =="+username);
        }
        List<String> roleList = managerDAO.queryManagerRoleList(username);
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() end managerDAO =="+managerDAO);
        }
        return roleList;
    }

    @Override
    public List<String> queryManagerPermissionList(String username) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() start username =="+username);
        }
        List<String> permissionList = managerDAO.queryManagerPermissionList(username);
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() end managerDAO =="+managerDAO);
        }
        return permissionList;
    }
}
