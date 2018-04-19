package com.damai.concert.service.impl;

import com.damai.concert.dao.IBackDao;
import com.damai.concert.dto.ManagerDTO;
import com.damai.concert.dto.MessageDTO;
import com.damai.concert.dto.RondaMessage;
import com.damai.concert.service.IBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Teori on 2018/4/16.
 */
@Service
public class BackService implements IBackService {

    @Autowired
    private IBackDao backDao;

    /**
     * 查询所有管理员用户
     * @return
     */
    @Override
    @Transactional
    public List<ManagerDTO> queryAllManagerUser() throws Exception {
        return backDao.queryAllManagerUser();
    }

    @Override
    public List<MessageDTO> addRonda() throws Exception {
        return null;
    }

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

        return backDao.queryAllRondaMessage();
    }


}