import React from "react";
import "../Css/MainContainer.css";
import Firewood from "../components/Firewood";

function FirewoodContainer(props) {
  const imgLog =
    "https://media.istockphoto.com/vectors/stack-of-nine-wooden-logs-vector-id472399302?k=6&m=472399302&s=612x612&w=0&h=iPu8q_fgft0sczEmYGGcGsERo3c1nYzyc-cg-S3hdxw=";
  const renderFirewood = () => {
    let fireWoodArr = [];
    for (let i = 0; i < props.firewoodCount; i++) {
      console.log(props.firewoodCount);

      fireWoodArr.push(<Firewood key={i} imgLog={imgLog} 
      // img={process.env.PUBLIC_URL + `../game-icons/${this.props.name.split(' ').join('_')}.png`}
      />);
    }
    return fireWoodArr;
  };
  return <div className="firewood-container">{renderFirewood()}</div>;
}

export default FirewoodContainer;
