package com.damai.concert.dao.impl;

import com.damai.concert.dao.IBackDao;
import com.damai.concert.dto.ManagerDTO;
import com.damai.concert.dto.MessageDTO;
import com.damai.concert.dto.RondaMessage;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.log4j.Logger;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by Teori on 2018/4/16.
 */

/**
 * 后台业务数据访问层
 */
@Repository
public class BackDao extends SqlSessionDaoSupport implements IBackDao {

    /** logger */
    private static final Logger logger = Logger.getLogger(BackDao.class);

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }

    /**
     * 查询所有管理员用户
     * @return
     */
    @Override
    public List<ManagerDTO> queryAllManagerUser() {
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() start ");
        }

        List<ManagerDTO> managerDTO = getSqlSession().selectList("com.damai.concert.dto.ManagerDTOMapper.queryAll");

        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() end ");
        }
        return managerDTO;
    }

    /**
     * 添加场次
     * @return
     * @throws Exception
     */
    @Override
    public List<MessageDTO> addRonda() throws Exception {

        return null;
    }

    /**
     * 删除场次
     * @return
     * @throws Exception
     */
    @Override
    public List<MessageDTO> delRonda() throws Exception {
        return null;
    }

    /**
     * 查询所有场次信息
     * @return
     * @throws Exception
     */
    @Override
    public List<RondaMessage> queryAllRondaMessage() throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() start ");
        }

        List<RondaMessage> rondaMessages = getSqlSession().selectList("com.damai.concert.dto.ManagerDTOMapper.queryAllMessage");

        if(logger.isDebugEnabled()){
            logger.debug("queryManagerDTOByName() end ");
        }
        return rondaMessages;
    }
}