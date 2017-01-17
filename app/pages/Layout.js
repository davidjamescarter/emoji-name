import React from "react";

import Header from "../components/layout/Header";

require("../stylesheet/styles.scss");

export default class Layout extends React.Component {

  render() {

    return (
      
      <div className="grid_container">

        <Header />

        <div className="grid_row">
          {this.props.children}
        </div>

      </div>

    );

  }

}
