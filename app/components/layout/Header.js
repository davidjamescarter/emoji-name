import React from "react";
import { Link } from "react-router";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
        	<h1>Emoji Name</h1>    
        </Link>
      </header>
    );
  }
}
