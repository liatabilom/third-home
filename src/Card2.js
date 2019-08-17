import React, { Component } from "react";
import JapaneseMobile from "./images/JapaneseMobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Card2.css";

class Card2 extends Component {
  render() {
    return (
      <div>
        <img
          className="mobile"
          src={JapaneseMobile}
          alt=""
          className="jpmobile"
        />
        <FontAwesomeIcon icon={faPlusCircle} size="1x" className="plusIcon2" />
      </div>
    );
  }
}

export default Card2;
