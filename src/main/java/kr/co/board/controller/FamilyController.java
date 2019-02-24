package kr.co.board.controller;

import kr.co.board.mapper.FamilyMapper;
import kr.co.board.vo.FamilyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/family")

public class FamilyController {
    @Autowired
    FamilyMapper fm;

    @RequestMapping(value = "/get", method = RequestMethod.POST)
    @ResponseBody
    public List<FamilyVO> familyList(FamilyVO vo){
        List<FamilyVO> familyList = (List<FamilyVO>) fm.familyList(vo);

        return familyList;
    }

    @RequestMapping(value = "/insert", method = RequestMethod.POST)
    @ResponseBody
    public boolean familyInsert(@RequestBody FamilyVO vo){
        int result = fm.familyInsert(vo);
        if(result == 1){
            return true;
        } else {
            return false;
        }
    }

    @RequestMapping(value="/update", method = RequestMethod.POST)
    @ResponseBody
    public boolean familyUpdate(@RequestBody FamilyVO vo){
        int result = fm.familyUpdate(vo);
        if(result == 1){
            return true;
        } else {
            return false;
        }
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    @ResponseBody
    public boolean familyDelete(@RequestBody FamilyVO vo){
        int result = fm.familyDelete(vo);
        if(result == 1){
            return true;
        } else {
            return false;
        }
    }
}
