import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from './components/MyNavbar'
import Home from './components/Home'

function App() {
  return <div className="App">
    <NavBar title="My Website">
    </NavBar>
    <Home title="Welcome to this page!">

    </Home>
  </div>;
}

export default App;
