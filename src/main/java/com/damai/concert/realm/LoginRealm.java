package com.damai.concert.realm;

import com.damai.concert.dao.IUserDAO;
import com.damai.concert.dto.UserDTO;
import com.damai.concert.realm.token.MyUsernamePasswordToken;
import com.damai.concert.sysconfig.SystemCfg;
import org.apache.log4j.Logger;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by 王明 on 2018/4/9.
 */
public class LoginRealm extends AuthorizingRealm {

    /** logger */
    private static final Logger logger = Logger.getLogger(LoginRealm.class);

    @Override
    public String getName() {
        return "LoginRealm";
    }

    @Autowired
    private IUserDAO userDAO;

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
//        String principal = principalCollection.getPrimaryPrincipal().toString();
        return null;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
        MyUsernamePasswordToken usernamePasswordToken = (MyUsernamePasswordToken) token;
        String msgLogin = usernamePasswordToken.getMsgLogin();
        String username = usernamePasswordToken.getUsername();
        char[] pwd = usernamePasswordToken.getPassword();
        String password = new String(pwd);
        logger.info("username" + username + "password" + password);
        UserDTO userDTO = null;
        try {
            userDTO = userDAO.queryUser(username);
        } catch (Exception e) {
            e.printStackTrace();
            throw new UnknownAccountException("账号错误");
        }
        if (userDTO == null){
            throw new UnknownAccountException("账号错误");
        }
        String userPassword = userDTO.getUserPassword();
        SimpleHash simpleHash = new SimpleHash("MD5", password, userDTO.getUserName());

        if(!SystemCfg.MSG_LOGIN.equals(msgLogin)){
            if (!simpleHash.toString().equalsIgnoreCase(userPassword)){
                throw new IncorrectCredentialsException("密码错误");
            }
        }
        return new SimpleAuthenticationInfo(username,password,getName());
    }
}
