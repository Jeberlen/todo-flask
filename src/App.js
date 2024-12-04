import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todos, setTodos] = useState({
    todos: [],
  });
  const [description, setDescription] = useState("");
  useEffect(() => {
    fetch("/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const onInputChanged = (e) => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };

  const onAddTodo = () => {
    console.log(description);
    fetch("/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: description }),
    })
      .then((res) => res.json())
      .then((res) => setTodos(res));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {todos.todos.map((todo) => (
          <p>{todo.description}</p>
        ))}
        <input type="text" onChange={onInputChanged} />
        <button onClick={onAddTodo}>Add</button>
      </header>
    </div>
  );
}

export default App;
