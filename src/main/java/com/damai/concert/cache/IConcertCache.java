package com.damai.concert.cache;

import java.util.Map;

/**
 * Created by 王明 on 2018/4/14.
 */
public interface IConcertCache {

    void saveHash(String key, Map<String,Object> value);
}
