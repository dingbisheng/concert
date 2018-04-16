package com.damai.concert.cache.impl;

import com.damai.concert.cache.IConcertCache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.Map;

/**
 * Created by 王明 on 2018/4/14.
 * 缓存层
 */
@Repository
public class ConcertCache implements IConcertCache{

    @Autowired
    private StringRedisTemplate redisTemplate;


    @Override
    public void saveHash(String key, Map<String, Object> value) {
        redisTemplate.boundHashOps(key).putAll(value);
    }


}
