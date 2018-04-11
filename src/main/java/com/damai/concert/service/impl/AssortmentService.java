package com.damai.concert.service.impl;


import com.damai.concert.dao.IAssortmentDAO;
import com.damai.concert.dto.AssortmentDTO;
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

    @Transactional(readOnly = true)
    public List<AssortmentDTO> queryAssortment() {
        List<AssortmentDTO> assortmentDTOs = assortmentDAO.queryAssortment();
        return assortmentDTOs;
    }

    @Transactional
    public void save(AssortmentDTO assortmentDTO) {
        assortmentDAO.save(assortmentDTO);
    }

    @Transactional
    public void update(String newName, String oldName) {
        assortmentDAO.update(newName,oldName);
    }

    @Transactional
    public void delete(Integer sortId) {
       assortmentDAO.delete(sortId);
    }
}
