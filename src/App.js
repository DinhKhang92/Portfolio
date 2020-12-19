import React from "react";

import Header from "./Header/Header"
import Home from "./Home/Home"


class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
