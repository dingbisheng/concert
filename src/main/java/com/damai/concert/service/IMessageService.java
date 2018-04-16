package com.damai.concert.service;


import com.damai.concert.dao.impl.MessageDAO;
import com.damai.concert.dto.MessageDTO;
import org.apache.log4j.Logger;

import java.util.List;

/**
 * Created by Administrator on 2018/4/13.
 */
public interface IMessageService {

    MessageDTO queryMessageInfo(Integer mesId)throws Exception;


}
