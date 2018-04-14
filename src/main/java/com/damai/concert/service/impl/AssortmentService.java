package com.damai.concert.service.impl;


import com.damai.concert.dao.IAssortmentDAO;
import com.damai.concert.dto.AssortmentDTO;
import com.damai.concert.dto.CityDTO;
import com.damai.concert.service.IAssortmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Administrator on 2018/4/10.
 */
@Service
public class AssortmentService implements IAssortmentService {

    @Autowired
    private IAssortmentDAO assortmentDAO;

    /**
     * 查询首页的分类
     * @return assortmentDTOs
     */
    @Transactional(readOnly = true)
    public List<AssortmentDTO> queryAssortment() {
        List<AssortmentDTO> assortmentDTOs = assortmentDAO.queryAssortment();
        return assortmentDTOs;
    }

    /**
     * 增加首页的分类
     * @param assortmentDTO
     */
    @Transactional
    public void save(AssortmentDTO assortmentDTO) {
        assortmentDAO.save(assortmentDTO);
    }

    /**
     * 修改首页的分类信息
     * @param newName
     * @param oldName
     */
    @Transactional
    public void update(String newName, String oldName) {
        assortmentDAO.update(newName,oldName);
    }

    /**
     * 根据sortId删除分类信息
     * @param sortId
     */
    @Transactional
    public void delete(Integer sortId) {
        assortmentDAO.delete(sortId);
    }

    @Transactional
    public List<AssortmentDTO> queryMessage() throws Exception{
        List<AssortmentDTO> assortmentDTOList = assortmentDAO.queryMessage(null, null, null,null,null);
        return assortmentDTOList;
    }

    @Transactional
    public List<AssortmentDTO> queryMessage(Integer sortId) throws Exception{
        List<AssortmentDTO> assortmentDTOList = assortmentDAO.queryMessage(sortId, null, null,null,null);
        return assortmentDTOList;
    }

    @Transactional
    public List<AssortmentDTO> queryMessage(Integer sortId, Integer subId) throws Exception{
        List<AssortmentDTO> assortmentDTOList = assortmentDAO.queryMessage(sortId, subId, null,null,null);
        return assortmentDTOList;
    }

    @Transactional
    public List<AssortmentDTO> queryMessage(Integer sortId, Integer subId, Integer cityId)throws Exception {
        List<AssortmentDTO> assortmentDTOList = assortmentDAO.queryMessage(sortId, subId, cityId,null,null);
        return assortmentDTOList;
    }

    @Transactional
    public List<AssortmentDTO> queryMessage(Integer sortId, Integer subId, Integer cityId, String minTime, String maxTime) throws Exception {
        List<AssortmentDTO> assortmentDTOList = assortmentDAO.queryMessage(sortId, subId, cityId,minTime,maxTime);
        return null;
    }

    @Transactional
    public List<CityDTO> queryCity() {
        List<CityDTO> cityDTOs = assortmentDAO.queryCity();
        return cityDTOs;
    }
}
