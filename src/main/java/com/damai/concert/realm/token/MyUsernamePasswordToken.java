package com.damai.concert.realm.token;

import org.apache.shiro.authc.UsernamePasswordToken;

/**
 * Created by Administrator on 2018\4\11 0011.
 */
public class MyUsernamePasswordToken extends UsernamePasswordToken {
    //用来标识是自媒体登录，或者是商户登录
    private String switchType;

    public String getSwitchType() {
        return switchType;
    }

    public void setSwitchType(String switchType) {
        this.switchType = switchType;
    }

    public MyUsernamePasswordToken(String username, String password) {
        super(username, password);
    }


}
