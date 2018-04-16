package com.damai.concert.dao;

import com.damai.concert.dto.SeatDTO;

import java.util.List;

/**
 * Created by Vincent on 2018\4\16 0016.
 */
public interface ISeatDAO {

    /**
     * @param msgId  场次ID
     * @return
     * @throws Exception
     */
    List<SeatDTO> getSeatList(Integer msgId) throws Exception;
}
