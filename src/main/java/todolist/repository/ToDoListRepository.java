package todolist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import todolist.domain.entity.ToDoList;


public interface ToDoListRepository extends JpaRepository<ToDoList, Long> {

}
