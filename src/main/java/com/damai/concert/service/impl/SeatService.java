package com.damai.concert.service.impl;

import com.damai.concert.dao.ISeatDAO;
import com.damai.concert.dto.SeatDTO;
import com.damai.concert.service.ISeatService;
import com.damai.concert.sysconfig.SystemCfg;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

/**
 * Created by Vincent on 2018\4\16 0016.
 */
@Service
public class SeatService implements ISeatService{

    @Autowired
    private ISeatDAO seatDAO;

    @Autowired
    private StringRedisTemplate redisTemplate;

    /**
     * logger
     */
    private static final Logger logger = Logger.getLogger(SeatService.class);

    @Override
    public Map<Integer, List<SeatDTO>> getViewSeat(Integer msgId) throws Exception{
        if (logger.isDebugEnabled()){
            logger.debug("getViewSeat() start msgId = "+msgId);
        }
        List<SeatDTO> seatList = seatDAO.getSeatList(msgId);
        //建立座位MAP
        TreeMap<Integer, List<SeatDTO>> seatListTreeMap = new TreeMap<>();
        for (SeatDTO seat:seatList){
            List<SeatDTO> seatDTOList = seatListTreeMap.get(seat.getSeatRow());
            if(null==seatDTOList){
                //没有该行，则插入该seat
                seatDTOList = new ArrayList<>();
                seatDTOList.add(seat);
                seatListTreeMap.put(seat.getSeatRow(),seatDTOList);
            }else{
                //有该行，则累加seat
                seatDTOList.add(seat);
            }
        }
        //将空出来的地方补上空白座位
        for (Integer seatRow:seatListTreeMap.keySet()){
            List<SeatDTO> seatDTOList = seatListTreeMap.get(seatRow);
            int maxCol=0;
            //查出最大列
            for (SeatDTO seat : seatDTOList){
                if(maxCol<seat.getSeatCol()){
                    maxCol = seat.getSeatCol();
                }
//                //如果redis存在此被锁定的座位 则将显示图片进行替换
//                String isLock = redisTemplate.opsForList().leftPop(SystemCfg.SEAT_STATE_PREFIX);
//                if(StringUtils.isNotEmpty(isLock)){
//                    seat.setSeatImg(SystemCfg.LOCK_SEAT_PNG);
//                }
            }
            for (int i = 1; i <= maxCol ; i++) {
                boolean flag = true;
                for (SeatDTO seat : seatDTOList){
                    if (seat.getSeatCol()==i){
                        flag = false;
                    }
                }
                if(flag){
                    SeatDTO seatDTO = new SeatDTO();
                    seatDTO.setSeatImg(SystemCfg.NO_SEAT_PNG);
                    seatDTO.setSeatState(SystemCfg.NO_SEAT_STATE);
                    seatDTO.setSeatRow(seatRow);
                    seatDTO.setSeatCol(i);
                    seatDTOList.add(seatDTO);
                }
            }
            //按照列排序
            seatDTOList.sort((seat1, seat2)->{return seat1.getSeatCol()-seat2.getSeatCol();});
        }

        if (logger.isDebugEnabled()){
            logger.debug("getViewSeat() end seatListTreeMap = "+seatListTreeMap);
        }

        return seatListTreeMap;
    }
}
