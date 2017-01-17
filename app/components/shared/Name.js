import React from "react";

export default class Name extends React.Component {

  	render() {

  		let name = this.props.name.replace(/_/g,' ');
  		
    	return (
    		<h1>{name}</h1>
    	);
  }
}
