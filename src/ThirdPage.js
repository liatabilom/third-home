import React, { Component } from "react";
import Search from "./Search";
import AllCards from "./AllCards";
import Pages from "./Pages";

class ThirdPage extends Component {
  render() {
    return (
      <div>
        <h1>
          <header className="header .d-sm-flex">
            Na'dia
            <br />
            Correia Gonc,alves
          </header>
          <Search />
        </h1>
        <h2>
          <AllCards />
        </h2>
        <h3>
          <Pages />
        </h3>
      </div>
    );
  }
}

export default ThirdPage;
