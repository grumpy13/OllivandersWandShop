import React, { Component } from "react";
import "./App.css";
import wands from "./wands";
import WandList from "./WandList";

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid bg-info">
        <div className="row">
          <WandList wands={wands} />
        </div>
      </div>
    );
  }
}

export default App;
