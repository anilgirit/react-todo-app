import React, { useState } from "react";
import { createRoot } from "react-dom/client";
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
import AddTodoToStorage from "./AddTodoToStorage";

function App() {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
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
                  const listGroup = document.getElementById("listGroup");
                  const root = createRoot(listGroup);
                  root.render(<ListGroupItem>{todo}</ListGroupItem>);

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
          <ListGroup id="listGroup"></ListGroup>
        </Container>
      </div>
    </div>
  );
}

export default App;
