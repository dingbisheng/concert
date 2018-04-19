package com.damai.concert.service.impl;

import com.damai.concert.dao.IUserDAO;
import com.damai.concert.dto.UserDTO;
import com.damai.concert.service.IUserService;
import org.apache.log4j.Logger;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Administrator on 2018\4\10 0010.
 */
@Service
public class UserService implements IUserService {

    /** logger */
    private static final Logger logger = Logger.getLogger(UserService.class);


    @Autowired
    private IUserDAO userDAO;

    /**
     * 分页显示所有Users，，subList为mybatis的提供的分页方法
     * @param currPage 表示第几页
     * @param pageSize 每页显示几条
     * @return
     */
    @Transactional(rollbackFor =Exception.class )
    @Override
    public List<UserDTO> queryAll(Integer currPage,Integer pageSize)throws Exception{
        logger.info("currPage:"+currPage+"--------pageSize:"+pageSize);
        List<UserDTO> list = userDAO.queryAll();
        Integer userNum = userDAO.queryUserNum();
        logger.info("userNum:"+userNum);
        //如果currPage小于1，则会报错。判断当其小于1是显示首页，并记录到日志中
        if (currPage<1){
            logger.error("currPage:"+currPage);
            currPage = 1;
        }
        if (userNum<pageSize){
            pageSize=userNum;
        }
        int firstIndex = (currPage-1)*pageSize;
        int lastIndex = currPage * pageSize;
        logger.info(list.subList(firstIndex,lastIndex));
        return list.subList(firstIndex,lastIndex);
    }

    /**
     * 根据username查询UserDTO
     * @param username
     * @return
     * @throws Exception
     */
    @Transactional(rollbackFor = Exception.class)
    @Override
    public UserDTO queryUser(String username)throws Exception{
        return userDAO.queryUser(username);
    }

    /**
     * 新增用户
     * @param username username
     * @param password 密码
     * @throws Exception
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void addUser(String username, String password) throws Exception{
        SimpleHash simpleHash = new SimpleHash("MD5",password,username);
        logger.info("密文simpleHash:"+simpleHash);
        userDAO.addUser(username,simpleHash.toString());
    }

    /**
     * 根据用户Id更新用户数据
     * @param username
     * @param password
     * @param id
     * @throws Exception
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateUser(String username, String password ,Integer id) throws Exception{
        SimpleHash simpleHash = new SimpleHash("MD5",password,username);
        logger.info("密文simpleHash:"+simpleHash+"-----用户id是:"+id);
        userDAO.updateUser(username,simpleHash.toString(),id.toString());
    }

    /**
     * 根据用户Id删除用户
     * @param id
     * @throws Exception
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteUser(Integer id) throws Exception{
        logger.info("删除的用户Id是:"+id);
        userDAO.deleteUser(id);
    }

}
