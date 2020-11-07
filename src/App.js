import './App.css';
// import "./scss/app.scss"
import {Home} from "./Components/Home/Home";
import React from "react";
import {Header} from "./Components/Header/Header";
import {Route} from "react-router-dom";
import {Cart} from "./Components/Cart/Cart";

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Route path={"/"} render={ ()=><Home/> } exact/>
        <Route path={"/cart"} render={ ()=><Cart/> }/>




    </div>
  );
}

export default App;
