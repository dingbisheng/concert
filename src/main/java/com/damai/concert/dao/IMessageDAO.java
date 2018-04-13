package com.damai.concert.dao;




import com.damai.concert.dto.MessageDTO;

import com.damai.concert.dto.SubclassDTO;

import java.util.List;

/**
 * Created by Administrator on 2018/4/10.
 */
public interface IMessageDAO {
    List<SubclassDTO> querySubclass(String sortName);

    MessageDTO queryMessageInfo(Integer mesId);
}
