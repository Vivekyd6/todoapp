import React, { useState } from "react";
import TodoTable from "./components/TodoTable";
import TodoForm from "./components/TodoForm";
import TodoSearch from "./components/TodoSearch";
// import { mockApi } from "./mockApi"; // assuming you have a mock API file

const App = () => {
  const [todos, setTodos] = useState([]); // initial state with mock data
  const [selectedTodo, setSelectedTodo] = useState(null); // state to track which todo is selected for editing

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleUpdateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setSelectedTodo(null);
  };

  const handleDeleteTodo = (todoId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  const handleSelectTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const handleClearSelectedTodo = () => {
    setSelectedTodo(null);
  };

  return (
    <div>
      <h1>Todo List App</h1>
      <TodoSearch todos={todos} setTodos={setTodos} />
      <TodoTable
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleSelectTodo={handleSelectTodo}
      />
      <TodoForm
        onSave={handleAddTodo}
        todo={handleUpdateTodo}
        selectedTodo={selectedTodo}
        onCancel={handleClearSelectedTodo}
      />
    </div>
  );
};

export default App;
