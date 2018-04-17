package com.damai.concert.service;

import com.damai.concert.dto.ManagerDTO;
import com.damai.concert.dto.MessageDTO;
import com.damai.concert.dto.RondaMessage;

import java.util.List;

/**
 * Created by Teori on 2018/4/16.
 */
public interface IBackService {

    /**
     * 查询所有管理员用户
     * @return
     */
    List<ManagerDTO> queryAllManagerUser() throws Exception;

    /**
     * 添加场次
     * @return
     * @throws Exception
     */
    List<MessageDTO> addRonda() throws Exception;

    /**
     * 删除场次
     * @return
     * @throws Exception
     */
    List<MessageDTO> delRonda() throws Exception;

    /**
     * 查询所有场次信息
     * @return
     * @throws Exception
     */
    List<RondaMessage> queryAllRondaMessage() throws Exception;
}