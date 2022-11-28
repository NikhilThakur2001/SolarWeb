import logo from './logo.svg';
import './App.css';
import 'animate.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
