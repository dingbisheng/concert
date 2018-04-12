package com.damai.concert.dao.impl;

import com.damai.concert.dao.IManagerDAO;
import com.damai.concert.dto.ManagerDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.log4j.Logger;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 后台管理登录数据访问层
 * Created by Vincent on 2018\4\11 0011.
 */
@Repository
public class ManagerDAO extends SqlSessionDaoSupport implements IManagerDAO {

    /**
     * logger
     */
    public static final Logger logger = Logger.getLogger(ManagerDAO.class);

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }


    /**
     * 根据用户名查询ManagerDTO
     * @param username
     * @return
     * @throws Exception
     */
    @Override
    public ManagerDTO queryManagerDTOByName(String username) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() start   username =="+ username);
        }

        ManagerDTO managerDTO = getSqlSession().selectOne("com.damai.concert.dto.ManagerDTOMapper.queryManagerDTOByName", username);

        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() end   ManagerDTO ==" + managerDTO);
        }
        return managerDTO;
    }

    /**
     * 通过账号名查询角色
     * @param username
     * @return
     * @throws Exception
     */
    @Override
    public List<String> queryManagerRoleList(String username) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerRoleList() start   username =="+ username);
        }
        List<String> roleListByName = getSqlSession().selectList("com.damai.concert.dto.ManagerDTOMapper.queryManagerRoleList", username);
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerRoleList() end   roleListByName =="+ roleListByName);
        }
        return roleListByName;
    }

    @Override
    public List<String> queryManagerPermissionList(String username) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerPermissionList() start   username =="+ username);
        }
        List<String> permissionListByName = getSqlSession().selectList("com.damai.concert.dto.ManagerDTOMapper.queryManagerPermissionList", username);
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerPermissionList() end   permissionListByName =="+permissionListByName);
        }
        return permissionListByName;
    }


}
