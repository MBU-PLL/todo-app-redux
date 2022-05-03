import { Row, Col, Tag, Input, Select, Button } from "antd";
import Todo from "../Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { todoListSelector, todoListAndSearchText } from "../../redux/selector";

export default function TodoList() {
  //const todoList = useSelector(todoListSelector);
  const todoList = useSelector(todoListAndSearchText);

  const [todoName, setTodoName] = useState("");
  const hanldeChangeName = (e) => {
    setTodoName(e.target.value);
  };

  const [priorityName, setPriorityName] = useState("Medium");
  const hanldeChangePriority = (value) => {
    setPriorityName(value);
  };

  const dispatch = useDispatch();
  const hanldeAddButtonClick = () => {
    dispatch(
      addTodoAction({
        id: uuidv4(),
        name: todoName,
        priority: priorityName,
        completed: false,
      })
    );
    setTodoName("");
    setPriorityName("Medium");
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflow: "auto" }}>
        {/* <Todo name="Learn React JS" priority="High" />
        <Todo name="Learn React Native" priority="High" />
        <Todo name="Learn React Native MSSQL" priority="Low" />
        <Todo name="Learn React + JaveScript" priority="Medium" />
        <Todo name="Learn React + NodeJS" priority="Medium" />
        <Todo name="Learn React + C#" priority="Low" />
        <Todo name="Learn C# + NodeJS" priority="Low" /> */}
        {todoList.map((todo) => (
          <Todo
            id={todo.id}
            key={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            placeholder="Add a new todo"
            value={todoName}
            onChange={hanldeChangeName}
          />
          <Select value={priorityName} onChange={hanldeChangePriority}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={hanldeAddButtonClick}>
            Add Todo
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
