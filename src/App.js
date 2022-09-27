import React, { useState } from "react";
import "./App.css";
import {
  Button,
  Container,
  Form,
  Input,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  function addTodo(e) {
    if (!input) {
      alert("Bir Todo Giriniz");
      return;
    }

    const todo = {
      id: Math.floor(Math.random() * 1000),
      value: input,
    };
    setTodos((oldTodos) => [...oldTodos, todo]);
    setInput("");
  }
  function clearInput() {
    document.getElementById("todoInput").value = "";
  }
  function deleteTodo(id) {
    const newTodoArray = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoArray);
  }
  return (
    <div>
      <div className="add-container">
        <Container className="todo-container">
          <h1 style={{ textAlign: "center", margin: "1rem" }}>MY TODO APP</h1>
          <Form>
            <InputGroup>
              <Input
                id="todoInput"
                placeholder="Bir Todo Giriniz..."
                onChange={handleChange}
              ></Input>
              <Button
                onClick={(e) => {
                  addTodo();
                  clearInput();
                  e.preventDefault();
                }}
                type="submit"
              >
                Ekle
              </Button>
            </InputGroup>
          </Form>
        </Container>
      </div>
      <br />
      <br />
      <div>
        <Container className="todo-container">
          <ListGroup>
            {todos.map((todo) => {
              return (
                <ListGroupItem id="li" key={todo.id}>
                  {todo.value}
                  <Button onClick={() => deleteTodo(todo.id)} color="danger">
                    <MdDeleteForever />
                  </Button>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Container>
      </div>
    </div>
  );
}

export default App;
