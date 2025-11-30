import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddTodo() {
    const text = inputValue.trim();
    if (text === "") return;

    const newTodo = {
      id: Date.now(),
      text: text,
    };

    setTodos([...todos, newTodo]);
    setInputValue(""); // input leegmaken
  }

  return (
    <>
      <h1>Opdracht 8 - To Do</h1>

      <div>
        <input
          type="text"
          placeholder="Typ een To-Do..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button onClick={handleAddTodo}>Toevoegen</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
