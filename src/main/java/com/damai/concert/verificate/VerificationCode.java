package com.damai.concert.verificate;

/**
 * Created by Teori on 2018/4/12.
 */

import java.util.Random;

/**
 * 验证码
 */
public class VerificationCode {
    /**
     * 验证码位数
     */
    private static final int COUNT = 6;

    public  static String createCode(){
        StringBuilder code = new StringBuilder();
        Random random = new Random();
        for (int i = 0; i < COUNT - 1 ; i++) {
            code.append(random.nextInt(10));
        }
        return code.toString();
    }
}