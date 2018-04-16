package com.damai.concert.cache.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Repository;

/**
 * Created by 王明 on 2018/4/14.
 * 缓存层
 */
@Repository
public class ConcertCache {

    @Autowired
    private StringRedisTemplate redisTemplate;

    
}
