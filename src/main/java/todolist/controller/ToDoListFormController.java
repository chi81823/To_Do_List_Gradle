package todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import todolist.domain.entity.ToDoList;
import todolist.service.ToDoListService;

@Controller
public class ToDoListFormController {

    @Autowired
    private ToDoListService service;

    @PostMapping("/test")
    public ModelAndView add(@RequestParam String name, @RequestParam String content) {
        service.save(ToDoList.Builder.create().name(name).content(content).build());
        return new ModelAndView("redirect:/");
    }
}
