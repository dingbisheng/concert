package com.damai.concert.service;

import com.damai.concert.dto.SeatDTO;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

/**
 * Created by Administrator on 2018\4\16 0016.
 */
public interface ISeatService {

    Map<Integer,List<SeatDTO>> getViewSeat(Integer msgId) throws Exception;


}
