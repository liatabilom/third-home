import React, { Component } from "react";
import JapaneseMobile from "./images/JapaneseMobile.png";
import "./Card2.css";

class Card2 extends Component {
  render() {
    return (
      <div>
        <img scr={JapaneseMobile} alt="" className="jpmobile" />
      </div>
    );
  }
}

export default Card2;
