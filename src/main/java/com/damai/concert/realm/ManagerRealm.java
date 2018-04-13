package com.damai.concert.realm;

import com.damai.concert.dto.ManagerDTO;
import com.damai.concert.service.IManagerService;
import com.damai.concert.service.IUserService;
import org.apache.log4j.Logger;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * Created by Administrator on 2018\4\11 0011.
 */
public class ManagerRealm extends AuthorizingRealm {
    /**
     * logger
     */
    public static final Logger logger = Logger.getLogger(ManagerRealm.class);

    @Autowired
    private IManagerService managerService;

    @Override
    public String getName() {
        return "ManagerRealm";
    }


    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        String username = principalCollection.getPrimaryPrincipal().toString();
        List<String> rolesByName = null;
        try {
            rolesByName = managerService.queryManagerRoleList(username);
        } catch (Exception e) {
            logger.fatal("角色查询失败！！！");
            e.printStackTrace();
        }
        List<String> permissionByName = null;
        try {
            permissionByName = managerService.queryManagerPermissionList(username);
        } catch (Exception e) {
            logger.fatal("权限查询失败！！！");
            e.printStackTrace();
        }
        SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();
        simpleAuthorizationInfo.addRoles(rolesByName);
        simpleAuthorizationInfo.addStringPermissions(permissionByName);
        return simpleAuthorizationInfo;

    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken)authenticationToken;
        String username = token.getUsername();
        char[] password = token.getPassword();
        String passwordStr = new String(password, 0, password.length);
        ManagerDTO managerDTO = null;
        try {
            managerDTO = managerService.queryManagerDTOByName(username);
        } catch (Exception e) {
            logger.fatal(e);
            e.printStackTrace();
        }
        if(null==managerDTO){
            throw new UnknownAccountException("不存在的账号");
        }
        if(!passwordStr.equals(managerDTO.getPassword())){
            throw new IncorrectCredentialsException("密码不正确");
        }
        SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(username,passwordStr,getName());
        return simpleAuthenticationInfo;
    }
}
