package kr.co.board.controller;

import kr.co.board.mapper.FamilyMapper;
import kr.co.board.vo.FamilyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/family")
class FamilyController {
    @Autowired
    FamilyMapper familyMapper;

    @RequestMapping(value="/list")
    @ResponseBody
    public List<FamilyVO> getFamilyList(){
        List<FamilyVO>  familyList = familyMapper.getFamilyList();

        return familyList;
    }

    @RequestMapping(value="/add")
    @ResponseBody
    public int addFamily(@RequestBody  FamilyVO family){
        System.out.println(family);
        int result = familyMapper.addFamily(family);
        return result;
    }
}
