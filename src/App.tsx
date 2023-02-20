import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";

let App: React.FC = () => {
  let [todo, setTodo] = useState("");

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
