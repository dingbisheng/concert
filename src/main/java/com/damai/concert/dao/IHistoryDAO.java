package com.damai.concert.dao;

import com.damai.concert.dto.HistoryDTO;

import java.util.List;

/**
 * Created by 王明 on 2018/4/15.
 */
public interface IHistoryDAO {

    List<HistoryDTO> queryHistory(Integer mesId);
}
