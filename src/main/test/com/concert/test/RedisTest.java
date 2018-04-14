package com.concert.test;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by 王明 on 2018/4/14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-core.xml")
public class RedisTest {

    /** logger */
    private static final Logger logger = Logger.getLogger(RedisTest.class);

    @Autowired
    private StringRedisTemplate redisTemplate;

    @Test
    public void testSpringRedis(){
        redisTemplate.delete("myStr");
        redisTemplate.opsForValue().set("myStr","seanLoL");
        logger.info(redisTemplate.opsForValue().get("myStr"));
    }
}
