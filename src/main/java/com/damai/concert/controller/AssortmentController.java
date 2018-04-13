package com.damai.concert.controller;

import com.damai.concert.dto.*;
import com.damai.concert.service.IAssortmentService;
import com.damai.concert.service.ISortDetailsService;
import com.damai.concert.sysconfig.SystemCfg;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * Created by Administrator on 2018/4/11.
 */
@Controller
@RequestMapping("/assortment")
public class AssortmentController {


    /** logger*/
    private static final Logger logger = Logger.getLogger(AssortmentController.class);

    @Autowired
    private IAssortmentService assortmentService ;
    @Autowired
    private ISortDetailsService sortDetailsService ;

    @RequestMapping("/queryAssortment")
    public String queryAssortment(Model model){
        List<AssortmentDTO> assortmentDTOList = assortmentService.queryAssortment();
        model.addAttribute("assortmentDTOList",assortmentDTOList);
        HashMap<Integer, List<SortDetailsDTO>> sortDetailsListHashMap = new HashMap<>();
        try {
             for (AssortmentDTO assortmentDTO :assortmentDTOList) {
            Integer sortId = assortmentDTO.getSortId();

            List<SortDetailsDTO> sortDetailsDTOList = sortDetailsService.querySortDetails(sortId, new Date(), SystemCfg.PAGE_NUM);
                 sortDetailsListHashMap.put(sortId, sortDetailsDTOList);
             }
            } catch (Exception e) {
                e.printStackTrace();
            }
            model.addAttribute("sortDetailsListHashMap",sortDetailsListHashMap);
        return "main";
    }

    /**
     * 根据分类 和子类 查询具体信息
     * @param sortId
     * @param subId
     * @param model
     * @return
     */
    @RequestMapping("/queryAll")
    public String queryAll(Integer sortId,Integer subId,Model model){
        if (logger.isDebugEnabled()){
            logger.debug("queryAll() start:::"+sortId+":::"+subId);
        }
        List<AssortmentDTO> assortmentDTOs = null;
        try {
            assortmentDTOs = assortmentService.queryMessage(sortId,subId);
        } catch (Exception e) {
            e.printStackTrace();
        }
        String sortName = null;
        List<SubclassDTO> subclassDTOList = null ;
        List<MessageDTO> messageDTOList = null ;
        CityDTO cityDTO = null ;
        PlaceDTO placeDTO = null;
        List<MesDetDTO> mesDetList = null ;
        for (AssortmentDTO assortmentDTO :assortmentDTOs) {
            sortName = assortmentDTO.getSortName();
            subclassDTOList = assortmentDTO.getSubclassDTOList();
            for (SubclassDTO subclassDTO : subclassDTOList) {
                messageDTOList = subclassDTO.getMessageDTOList();
                for (MessageDTO messageDTO : messageDTOList) {
                    cityDTO = messageDTO.getCityDTO();
                    mesDetList = messageDTO.getMesDetList();
                    placeDTO = messageDTO.getPlaceDTO();
                }
            }
        }
        //查询所有城市
        List<CityDTO> cityDTOList = assortmentService.queryCity();
        model.addAttribute("cityDTOList",cityDTOList);
        //全部分类集合
        List<AssortmentDTO> assortmentDTOList = assortmentService.queryAssortment();
        model.addAttribute("assortmentDTOList",assortmentDTOList);
        //选中的分类对象
        model.addAttribute("sortName",sortName);
        //
        model.addAttribute("subclassDTOList",subclassDTOList);
        model.addAttribute("messageDTOList",messageDTOList);
        model.addAttribute("placeDTO",placeDTO);
        model.addAttribute("mesDetList",mesDetList);
        if (logger.isDebugEnabled()){
            logger.debug("queryMessage() end:::");
        }
        return "details";
    }

    @RequestMapping("/queryMessage")
    public String queryMessage(Integer sortId,Integer subId,Integer cityId,String minTime,String maxTime, Model model){
        List<AssortmentDTO> assortmentDTOs = null;
        try {
            assortmentDTOs = assortmentService.queryMessage(sortId,subId,cityId,minTime,maxTime);
        } catch (Exception e) {
            e.printStackTrace();
        }
        String sortName = null;
        List<SubclassDTO> subclassDTOList = null ;
        List<MessageDTO> messageDTOList = null ;
        CityDTO cityDTO = null ;
        PlaceDTO placeDTO = null;
        List<MesDetDTO> mesDetList = null ;
            for (AssortmentDTO assortmentDTO :assortmentDTOs) {
                sortName = assortmentDTO.getSortName();
                subclassDTOList = assortmentDTO.getSubclassDTOList();
                for (SubclassDTO subclassDTO : subclassDTOList) {
                    messageDTOList = subclassDTO.getMessageDTOList();
                    for (MessageDTO messageDTO : messageDTOList) {
                        cityDTO = messageDTO.getCityDTO();
                        mesDetList = messageDTO.getMesDetList();
                        placeDTO = messageDTO.getPlaceDTO();
                    }
                }
            }

        //选中的分类对象
        model.addAttribute("sortName",sortName);
        //
        model.addAttribute("subclassDTOList",subclassDTOList);
        model.addAttribute("messageDTOList",messageDTOList);
        model.addAttribute("placeDTO",placeDTO);
        model.addAttribute("mesDetList",mesDetList);
        return "details";
    }


}
