package kr.co.board.controller;

import kr.co.board.mapper.BaseMapper;
import kr.co.board.vo.BaseVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class MyController {
    @Autowired
    BaseMapper BM;

    @GetMapping("/{name}.html")
    public String page(@PathVariable String name, Model model) {
        model.addAttribute("pageName", name);
        return "page";
    }

    @RequestMapping(value = "/baselist", method = RequestMethod.POST)
    public String baseList(BaseVO vo){
        List<BaseVO> baseList = (List<BaseVO>) BM.baseList(vo);
        String hi = baseList.get(0).toString();

        return hi;
    }
}