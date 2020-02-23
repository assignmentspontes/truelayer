import React from "react";
import "./App.css";
import { Todos } from "./components/Todos";
import { Recorders } from "./components/Recorders";

function App() {
  return (
    <div className="app">
      <Recorders></Recorders>
      <hr />
      <Todos></Todos>
    </div>
  );
}

export default App;
