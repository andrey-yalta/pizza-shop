import './App.css';
// import "./scss/app.scss"
import {Home} from "./Components/Home/Home";
import React from "react";
import {Header} from "./Components/Header/Header";

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Home/>
    </div>
  );
}

export default App;
