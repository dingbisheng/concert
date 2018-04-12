package com.damai.concert.controller;

import com.damai.concert.dto.*;
import com.damai.concert.service.IAssortmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * Created by Administrator on 2018/4/11.
 */
@Controller
@RequestMapping("/assortment")
public class AssortmentController {

    @Autowired
    private IAssortmentService assortmentService ;

    @RequestMapping("/queryAssortment")
    public String queryAssortment(Model model){
        List<AssortmentDTO> assortmentDTOList = assortmentService.queryAssortment();
        model.addAttribute("assortmentDTOList",assortmentDTOList);
        return "main";
    }

    @RequestMapping("/queryMessage")
    public String queryMessage(Integer sortId,Integer subId,Integer cityId,Model model){
        List<AssortmentDTO> assortmentDTOList = assortmentService.queryMessage(sortId,subId,cityId);
        List<SubclassDTO> subclassDTOList = null ;
        List<MessageDTO> messageDTOList = null ;
        CityDTO cityDTO = null ;
        PlaceDTO placeDTO = null;
        List<MesDetDTO> mesDetList = null ;
        for (AssortmentDTO assortmentDTO : assortmentDTOList){
             subclassDTOList = assortmentDTO.getSubclassDTOList();
            for (SubclassDTO subclassDTO :subclassDTOList){
                 messageDTOList = subclassDTO.getMessageDTOList();
                for (MessageDTO messageDTO :messageDTOList){
                    cityDTO = messageDTO.getCityDTO();
                    mesDetList = messageDTO.getMesDetList();
                    placeDTO = messageDTO.getPlaceDTO();
                }
            }
        }
        model.addAttribute("assortmentDTOList",assortmentDTOList);
        model.addAttribute("subclassDTOList",subclassDTOList);
        model.addAttribute("messageDTOList",messageDTOList);
        model.addAttribute("cityDTO",cityDTO);
        model.addAttribute("placeDTO",placeDTO);
        model.addAttribute("mesDetList",mesDetList);
        return "details";
    }


}
