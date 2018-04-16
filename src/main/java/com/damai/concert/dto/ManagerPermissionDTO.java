package com.damai.concert.dto;

import java.io.Serializable;

/**
 * 管理员权限DTO
 * Created by Vincent on 2018\4\11 0011.
 */
public class ManagerPermissionDTO  implements Serializable {
    public static final Long serialVersionUID = 1L;

    private Integer permissionId;
    private String permissionName;

    public Integer getPermissionId() {
        return permissionId;
    }

    public void setPermissionId(Integer permissionId) {
        this.permissionId = permissionId;
    }

    public String getPermissionName() {
        return permissionName;
    }

    public void setPermissionName(String permissionName) {
        this.permissionName = permissionName;
    }
}
