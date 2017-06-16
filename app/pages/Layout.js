import React from "react";

import { Link } from 'react-router';

import Header from "../components/layout/Header";

require("../stylesheet/styles.scss");

export default class Layout extends React.Component {

  render() {

    return (
      <div>
        <div className="grid_container">

          <Header />

          <div className="grid_row">
            {this.props.children}
          </div>

        </div>
        <Link className="author" target="_blank" to="http://www.david-carter.co/">Created By David Carter</Link>
      </div>
    );

  }

}
