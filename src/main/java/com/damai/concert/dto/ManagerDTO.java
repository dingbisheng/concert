package com.damai.concert.dto;

/**
 *管理员实体类
 * Created by Vincent on 2018\4\11 0011.
 */
public class ManagerDTO {
    private Integer managerId;
    private String managerName;
    private String managerNickName;
    private String password;

    public Integer getManagerId() {

        return managerId;
    }

    public void setManagerId(Integer managerId) {
        this.managerId = managerId;
    }

    public String getManagerName() {
        return managerName;
    }

    public void setManagerName(String managerName) {
        this.managerName = managerName;
    }

    public String getManagerNickName() {
        return managerNickName;
    }

    public void setManagerNickName(String managerNickName) {
        this.managerNickName = managerNickName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
