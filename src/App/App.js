import React from "react";

import Header from "../Header/Header"
import Home from "../Home/Home"
import Portfolio from "../Portfolio/Portfolio"
import Skills from "../Skills/Skills"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"


class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Home />
        <Portfolio />
        {/* <Skills />
        <Contact />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
