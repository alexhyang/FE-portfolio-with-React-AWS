import React from "react";
import Side from "./components/Side";
import Main from "./components/Main";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Side />
        <Main />
      </div>
    );
  }
}

export default App;
