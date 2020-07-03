import React from "react";
import "../Css/MainContainer.css";
import Firewood from "../components/Firewood";

function FirewoodContainer(props) {
  const imgLog =
    "http://www.clker.com/cliparts/B/E/e/f/z/O/lumber-icon-hi.png";
  const renderFirewood = () => {
    let fireWoodArr = [];
    for (let i = 0; i < props.firewoodCount; i++) {
      console.log(props.firewoodCount);

      fireWoodArr.push(<Firewood key={i} imgLog={imgLog}       />);
    }
    return fireWoodArr;
  };
  return <div className="firewood-container">{renderFirewood()}</div>;
}

export default FirewoodContainer; 
