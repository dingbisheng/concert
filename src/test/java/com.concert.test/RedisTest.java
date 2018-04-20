package com.concert.test;


import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;
import java.util.concurrent.TimeUnit;

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

    /**
     * redis String的键值对存取
     */
    @Test
    public void testSpringRedis(){
        redisTemplate.delete("myStr");
        redisTemplate.opsForValue().set("myStr","seanLoL");
        logger.info(redisTemplate.opsForValue().get("myStr"));
    }

    /**
     * redis list的存取
     */
    @Test
    public void testSpringRedis2(){
        // List读写
        redisTemplate.delete("myList");
        redisTemplate.opsForList().rightPush("myList", "Q");
        redisTemplate.opsForList().rightPush("myList", "W");
        redisTemplate.opsForList().leftPush("myList", "E");
        List<String> listCache = redisTemplate.opsForList().range(
                "myList", 0, -1);
        for (String s : listCache) {
            logger.info(s);
        }
        logger.info("---------------");
    }

    /**
     * 设置过期时间  运行后在SSH中HGETALL red_123查看结果  1) "name"    2) "temp\xe6\xb5\x8b\xe8\xaf\x95"
     *  hget  red_123  name  查询结果  "temp\xe6\xb5\x8b\xe8\xaf\x95"
     */
    @Test
    public void testTime(){
        String hashKey = "seat1";
        String versionVal = (String) redisTemplate.boundHashOps("yanchanghui1").get(hashKey);
        Long expire = redisTemplate.boundHashOps("yanchanghui1").getExpire();
        System.out.println("redis有效时间为："+expire+"S");
        if (versionVal == null){
            System.out.println("redis缓存没有 数据，重新获取后设置缓存");
            versionVal ="sale";
            //将结果放入缓存，注意先后顺序(先设置值，再设置过期时间)，否则过期时间不生效
            redisTemplate.opsForHash().put("yanchanghui1",hashKey,versionVal);
            //30是定时时间   TimeUnit.SECONDS时间单位设置为S
            redisTemplate.expire("yanchanghui1", 600, TimeUnit.SECONDS);
        }
        System.out.println(versionVal);
    }

}
