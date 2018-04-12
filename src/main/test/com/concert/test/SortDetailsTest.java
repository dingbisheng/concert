package com.concert.test;

import com.damai.concert.service.ISortDetailsService;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;
import java.util.List;

/**
 * Created by Teori on 2018/4/12.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:spring-core.xml")
public class SortDetailsTest {

    /** logger */
    private static final Logger logger = Logger.getLogger(SortDetailsTest.class);

    @Autowired
    private ISortDetailsService sortDetailsService;

    @Test
    public void detailsTest(){
        Date date = new Date();
        List<Object> list = sortDetailsService.querySortDetails(1,date);
        logger.info(list);
        for (Object l:list) {
            logger.info(l);
        }
    }

}