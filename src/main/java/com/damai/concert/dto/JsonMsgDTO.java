package com.damai.concert.dto;

import java.io.Serializable;

/**
 * Created by Administrator on 2018/4/21.
 */
public class JsonMsgDTO implements Serializable{
    private Integer code;
    private String msg;

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
