import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormPropsTextFields from "./Form.js";
import FormValidate from "./FormHook.js";

function App() {
  return (
    <div className="App">
      <FormPropsTextFields />
      <FormValidate />
    </div>
  );
}

export default App;
