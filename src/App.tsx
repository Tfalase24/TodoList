import React from "react";

import "./App.css";
import InputField from "./components/InputField";

let App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
};

export default App;
