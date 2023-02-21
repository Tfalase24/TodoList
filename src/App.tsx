import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";

let App: React.FC = () => {
  let [todo, setTodo] = useState("");
  let [todos, setTodos] = useState<Todo[]>([]);

  let handleAdd = () => {};

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
