package com.damai.concert.dto;

/**
 * Created by 王明 on 2018/4/9.
 */
public class UserDTO {
    public static final Long serialVersionUID = 1L;
    private Integer userId;
    private String userName;
    private String userRealname;
    private String userSex;
    private String userBirthday;
    private String userEdu;
    private String userWork;
    private String userIDcard;
    private String userAddr;
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

    public String getUserRealname() {
        return userRealname;
    }

    public void setUserRealname(String userRealname) {
        this.userRealname = userRealname;
    }

    public String getUserSex() {
        return userSex;
    }

    public void setUserSex(String userSex) {
        this.userSex = userSex;
    }

    public String getUserBirthday() {
        return userBirthday;
    }

    public void setUserBirthday(String userBirthday) {
        this.userBirthday = userBirthday;
    }

    public String getUserEdu() {
        return userEdu;
    }

    public void setUserEdu(String userEdu) {
        this.userEdu = userEdu;
    }

    public String getUserIDcard() {
        return userIDcard;
    }

    public void setUserIDcard(String userIDcard) {
        this.userIDcard = userIDcard;
    }

    public String getUserAddr() {
        return userAddr;
    }

    public void setUserAddr(String userAddr) {
        this.userAddr = userAddr;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserWork() {
        return userWork;
    }

    public void setUserWork(String userWork) {
        this.userWork = userWork;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UserDTO userDTO = (UserDTO) o;

        if (userId != null ? !userId.equals(userDTO.userId) : userDTO.userId != null) return false;
        if (userName != null ? !userName.equals(userDTO.userName) : userDTO.userName != null) return false;
        if (userRealname != null ? !userRealname.equals(userDTO.userRealname) : userDTO.userRealname != null)
            return false;
        if (userSex != null ? !userSex.equals(userDTO.userSex) : userDTO.userSex != null) return false;
        if (userBirthday != null ? !userBirthday.equals(userDTO.userBirthday) : userDTO.userBirthday != null)
            return false;
        if (userEdu != null ? !userEdu.equals(userDTO.userEdu) : userDTO.userEdu != null) return false;
        if (userWork != null ? !userWork.equals(userDTO.userWork) : userDTO.userWork != null) return false;
        if (userIDcard != null ? !userIDcard.equals(userDTO.userIDcard) : userDTO.userIDcard != null) return false;
        if (userAddr != null ? !userAddr.equals(userDTO.userAddr) : userDTO.userAddr != null) return false;
        return userPassword != null ? userPassword.equals(userDTO.userPassword) : userDTO.userPassword == null;

    }

    @Override
    public int hashCode() {
        int result = userId != null ? userId.hashCode() : 0;
        result = 31 * result + (userName != null ? userName.hashCode() : 0);
        result = 31 * result + (userRealname != null ? userRealname.hashCode() : 0);
        result = 31 * result + (userSex != null ? userSex.hashCode() : 0);
        result = 31 * result + (userBirthday != null ? userBirthday.hashCode() : 0);
        result = 31 * result + (userEdu != null ? userEdu.hashCode() : 0);
        result = 31 * result + (userWork != null ? userWork.hashCode() : 0);
        result = 31 * result + (userIDcard != null ? userIDcard.hashCode() : 0);
        result = 31 * result + (userAddr != null ? userAddr.hashCode() : 0);
        result = 31 * result + (userPassword != null ? userPassword.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "userId=" + userId +
                ", userName='" + userName + '\'' +
                ", userRealname='" + userRealname + '\'' +
                ", userSex='" + userSex + '\'' +
                ", userBirthday='" + userBirthday + '\'' +
                ", userEdu='" + userEdu + '\'' +
                ", userWork='" + userWork + '\'' +
                ", userIDcard='" + userIDcard + '\'' +
                ", userAddr='" + userAddr + '\'' +
                ", userPassword='" + userPassword + '\'' +
                '}';
    }
}
