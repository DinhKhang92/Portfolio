import React from "react";

import "./App.css"

import Header from "../Header/Header"
import Home from "../Home/Home"
import Portfolio from "../Portfolio/Portfolio"
import Skills from "../Skills/Skills"
import Contact from "../Contact/Contact"


class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Home />
        <Portfolio />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
