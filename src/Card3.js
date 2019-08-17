import React, { Component } from "react";
import JapaneseFood from "./images/JapaneseFood.png";
import Draggable from "react-draggable";

import "./Card3.css";

class Card3 extends Component {
  render() {
    return (
      <div
        className="parent"
        style={{
          height: "500px",
          width: "290px",
          position: "relative",
          overflow: "auto",
          padding: "0"
        }}
      >
        <div style={{ height: "1000px", padding: "0" }}>
          <Draggable
            bounds={(0, 10, 0, 10)}
            handle=".handle"
            grid={(25, 25)}
            allowAnyClick={true}
            cancel={".body"}
            disabled={true}
            dragHandlers={false}
          >
            <img src={JapaneseFood} alt="" className="backgroundImg" />
          </Draggable>
        </div>
      </div>
    );
  }
}

export default Card3;
