import React, { Component } from "react";
import WandCard from "./WandCard";

class WandList extends Component {
  render() {
    let wands = this.props.wands.map(wand => (
      <WandCard wand={wand} key={wand.wood} />
    ));
    return (
      <div className="container content col-10">
        <h2 className="text-center text-uppercase font-weight-bold">Wands</h2>
        <div className="row">{wands}</div>
      </div>
    );
  }
}
export default WandList;
