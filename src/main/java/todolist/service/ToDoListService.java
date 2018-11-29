package todolist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import todolist.domain.entity.ToDoList;
import todolist.exception.NotFound;
import todolist.repository.ToDoListRepository;

import java.sql.Timestamp;
import java.util.List;

@Service
public class ToDoListService {
    @Autowired
    private ToDoListRepository repo;

    public ToDoList findById(Long id) throws NotFound {
        return repo.findById(id).orElseThrow(NotFound::new);
    }

    public ToDoList save(ToDoList toDoList) {
        return repo.save(toDoList);
    }

    public List<ToDoList> getAll() {
        return repo.findAll();
    }

    public ToDoList update(Long id, String name, String content) throws NotFound {
        ToDoList toDoList = findById(id);
        toDoList.setName(name);
        toDoList.setContent(content);
        return repo.save(toDoList);
    }

    public void delete(long id) {
        repo.deleteById(id);
    }

    public List<ToDoList> findCreateDate(Long time) {
        return repo.findByCreateDateLessThanEqual(toTimestamp(time))
                   .orElse(null);

    }

    public List<ToDoList> findEstimated(Long start, Long end) {
        return repo.findByEstimatedGreaterThanEqualAndEstimatedLessThanEqual(toTimestamp(start), toTimestamp(end))
                   .orElse(null);
    }

    private Timestamp toTimestamp(Long val) {
        return new Timestamp(val);
    }
}
