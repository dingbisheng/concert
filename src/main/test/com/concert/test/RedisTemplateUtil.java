package com.concert.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.*;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Created by 王明 on 2018/4/14.
 */
@Repository
public class RedisTemplateUtil {

    @Autowired
    private RedisTemplate redisTemplate;

    public RedisTemplateUtil(RedisTemplate redisTemplate){
        this.redisTemplate=redisTemplate;
    }

    /**
     * redis String的存取
     * @param key
     * @param value
     */
    public void set(String key,Object value){
        ValueOperations valueOperations = redisTemplate.opsForValue();
        valueOperations.set(key,value);
    }

    public Object get(String key){
        return redisTemplate.opsForValue().get(key);
    }

    /**
     * redis list的存取
     * @param key
     * @param value
     */
    public void setList(String key, List<?> value){
        ListOperations listOperations = redisTemplate.opsForList();
        listOperations.leftPush(key,value);
    }

    public Object getList(String key){
        return redisTemplate.opsForList().leftPop(key);
    }

    /**
     * redis set的存取
     * @param key
     * @param value
     */
    public void setSet(String key, Set<?> value){
        SetOperations setOperations = redisTemplate.opsForSet();
        setOperations.add(key,value);
    }

    public Object getSet(String key){
        return redisTemplate.opsForSet().members(key);
    }

    /**
     * redis hash的存取
     * @param key
     * @param value
     */
    public void setHash(String key, Map<String,?> value){
        HashOperations hashOperations = redisTemplate.opsForHash();
        hashOperations.putAll(key,value);
    }

    public Object getHash(String key){
        return redisTemplate.opsForHash().entries(key);
    }

    public void  delete(String key){
        redisTemplate.delete(key);
    }
}
