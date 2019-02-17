package kr.co.board.controller;

        import kr.co.board.mapper.TestMapper;
        import kr.co.board.vo.TestVO;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Controller;
        import org.springframework.ui.Model;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.PathVariable;
        import org.springframework.web.bind.annotation.RequestMapping;

@Controller
class MyController {

    @Autowired
    TestMapper testMapper;

    @GetMapping("/{name}.html")
    public String page(@PathVariable String name, Model model) {
        model.addAttribute("pageName", name);
        return "page";
    }

    @RequestMapping(value="testInsert")
    public String testInsert(TestVO test) {
        testMapper.insertTest(test);
        return "ds";
    }

}`   `