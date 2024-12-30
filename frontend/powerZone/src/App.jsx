import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Router, Route } from "react-router-dom";
import Home from "./pages/customerPages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello Power Zone</h1>
    </>
  );
}

export default App;
