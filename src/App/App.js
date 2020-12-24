import React from "react";

import Header from "../Header/Header"
import Home from "../Home/Home"
import Portfolio from "../Portfolio/Portfolio"
import Skills from "../Skills/Skills"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

import "./App.css"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      openedDrawer: false
    }
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(){
    alert(JSON.stringify(this.state));
    this.setState(prevState => {
      return{
        openedDrawer: !prevState.openedDrawer
      }
    })
  }

  render(){
    return (
      <div>
        {/* <Header toggleDrawer={this.toggleDrawer}/> */}
        <Home />
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
