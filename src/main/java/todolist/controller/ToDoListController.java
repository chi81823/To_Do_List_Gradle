package todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import todolist.domain.entity.ToDoList;
import todolist.exception.NotFound;
import todolist.service.ToDoListService;

import java.util.List;

@RestController
@RequestMapping("/api/todolist")
public class ToDoListController {

    @Autowired
    private ToDoListService service;

    @GetMapping("/{id}")
    public ToDoList getById(@PathVariable long id) throws NotFound {

        return service.findById(id);
    }


    @PutMapping("/{id}")
    public ToDoList update(@PathVariable Long id, @RequestBody ToDoList toDoList) throws NotFound {

        return service.update(id, toDoList.getName(), toDoList.getContent());
    }

    @PostMapping()
    public ToDoList add(@RequestBody ToDoList toDoList) {

        return service.save(toDoList);
    }

    @GetMapping("/all")
    public List<ToDoList> getAll() {

        return service.getAll();
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable long id) {

        service.delete(id);
    }

    @GetMapping("createTime")
    public List<ToDoList> getCreateTime(@RequestParam Long time) {
        return service.findCreateDate(time);
    }

    @GetMapping("estimated")
    public List<ToDoList> getEstimated(@RequestParam Long start, Long end) {
        return service.findEstimated(start, end);
    }


}
