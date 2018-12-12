package todolist.domain.entity;


import javax.persistence.*;
import java.sql.Timestamp;


@Entity
@Table(name = "to_do_list")
public class ToDoList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "content")
    private String content;

    @Column(name = "date")
    private Timestamp createDate;

    @Column(name = "estimated")
    private Timestamp estimated;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Timestamp createDate) {
        this.createDate = createDate;
    }

    public Timestamp getEstimated() {
        return estimated;
    }

    public void setEstimated(Timestamp estimated) {
        this.estimated = estimated;
    }


    public static final class Builder {
        private Long id;
        private String name;
        private String content;
        private Timestamp createDate;
        private Timestamp estimated;

        private Builder() {}

        public static Builder create() { return new Builder(); }

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder name(String name) {
            this.name = name;
            return this;
        }

        public Builder content(String content) {
            this.content = content;
            return this;
        }

        public Builder createDate(Timestamp createDate) {
            this.createDate = createDate;
            return this;
        }

        public Builder estimated(Timestamp estimated) {
            this.estimated = estimated;
            return this;
        }

        public ToDoList build() {
            ToDoList toDoList = new ToDoList();
            toDoList.setId(id);
            toDoList.setName(name);
            toDoList.setContent(content);
            toDoList.setCreateDate(createDate);
            toDoList.setEstimated(estimated);
            return toDoList;
        }
    }
}
