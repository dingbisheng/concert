package com.damai.concert.dao;

import com.damai.concert.dto.SeatDTO;

import java.util.List;

/**
 * Created by Administrator on 2018\4\16 0016.
 */
public interface ISeatDAO {

    List<SeatDTO> getSeatList();
}
