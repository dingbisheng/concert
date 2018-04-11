package com.damai.concert.dto;

/**
 * 管理员角色DTO
 * Created by Administrator on 2018\4\11 0011.
 */
public class ManagerRoleDTO {
    public static final Long serialVersionUID = 1L;
    private Integer roleId;
    private String roleName;

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
