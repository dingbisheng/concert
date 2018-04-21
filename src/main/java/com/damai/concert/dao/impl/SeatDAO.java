package com.damai.concert.dao.impl;

import com.damai.concert.dao.ISeatDAO;
import com.damai.concert.dto.SeatDTO;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.log4j.Logger;
import org.mybatis.spring.support.SqlSessionDaoSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Vincent on 2018\4\16 0016.
 */
@Repository
public class SeatDAO extends SqlSessionDaoSupport implements ISeatDAO{

    /**
     * logger
     */
    private static final Logger logger = Logger.getLogger(SeatDAO.class);

    @Autowired
    public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
        super.setSqlSessionFactory(sqlSessionFactory);
    }


    @Override
    public List<SeatDTO> getSeatList(Integer msgId) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("getSeatList() start msgId == "+ msgId);
        }
        List<SeatDTO> seatDTOList = getSqlSession().selectList("com.damai.concert.dao.ISeatDAOMapper.getSeatByMsgId", msgId);
        if(logger.isDebugEnabled()){
            logger.debug("getSeatList() end seatDTOList == "+ seatDTOList);
        }
        return seatDTOList;
    }

    @Override
    public SeatDTO getSeatByMsgIdAndSeatId(Integer msgId, Integer seatId) throws Exception {
        if(logger.isDebugEnabled()){
            logger.debug("getSeatByMsgIdAndSeatId() start msgId seatId== "+ msgId+"/"+seatId);
        }
        Map<String, Object> map = new HashMap<>();
        map.put("msgId",msgId);
        map.put("seatId",seatId);
        SeatDTO seatDTO = getSqlSession().selectOne("com.damai.concert.dao.ISeatDAOMapper.getSeatByMsgIdAndSeatId", map);
        if(logger.isDebugEnabled()){
            logger.debug("getSeatByMsgIdAndSeatId() end seatDTO == "+ seatDTO);
        }
        return seatDTO;
    }
}
