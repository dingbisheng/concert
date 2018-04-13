package com.damai.concert.service;


import com.damai.concert.dto.AssortmentDTO;
import com.damai.concert.dto.CityDTO;

import java.util.List;

/**
 * Created by Administrator on 2018/4/10.
 */
public interface IAssortmentService {

    List<AssortmentDTO> queryAssortment();

    void save(AssortmentDTO assortmentDTO);

    void update(String newName, String oldName);

    void delete(Integer sortId);

    public List<AssortmentDTO> queryMessage(Integer sortId);

    public List<AssortmentDTO> queryMessage(Integer sortId,Integer subId);

    public List<AssortmentDTO> queryMessage(Integer sortId,Integer subId,Integer cityId);

    List<CityDTO> queryCIty();
}
