package com.damai.concert.dto;

/**
 * Created by 王明 on 2018/4/9.
 */
public class UserDTO {

    private Integer userId;
    private String userName;
    private String userPassword;

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserDTO userDTO = (UserDTO) o;

        if (userId != null ? !userId.equals(userDTO.userId) : userDTO.userId != null) return false;
        if (userName != null ? !userName.equals(userDTO.userName) : userDTO.userName != null) return false;
        return userPassword != null ? userPassword.equals(userDTO.userPassword) : userDTO.userPassword == null;

    }

    @Override
    public int hashCode() {
        int result = userId != null ? userId.hashCode() : 0;
        result = 31 * result + (userName != null ? userName.hashCode() : 0);
        result = 31 * result + (userPassword != null ? userPassword.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userPassword='" + userPassword + '\'' +
                '}';
    }
}
