import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "学习 Webpack 配置", completed: false },
    { id: 2, text: "练习 React 组件", completed: true },
    { id: 3, text: "理解打包过程", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <div className="todo-input-section">
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          placeholder="输入待办事项..."
        />
        <button className="btn btn-add" onClick={addTodo}>
          添加
        </button>
      </div>
      <ul className="todo-items">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? "completed" : ""}`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="todo-text">{todo.text}</span>
            <button
              className="btn btn-delete"
              onClick={() => deleteTodo(todo.id)}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
