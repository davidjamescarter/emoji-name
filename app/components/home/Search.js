import React from "react";

import Results from './search/Results';

export default class Search extends React.Component {

	constructor() {
    	super();
    	this.state = {
      		search: 'Donald Trump'
    	};	
  	}

  	updateSearch(e) {
  		this.setState({
  			search: e.target.value.substring(0, 75)
  		}) 
  	}

	render() {

		let foundName = this.props.names.find(
			(name) => {

				return name.name === this.state.search;	

			}

		);

	    return (	
	    	<div>
	    		<input type="text" 
		      		value={this.state.search}
		      		onChange={this.updateSearch.bind(this)}/>
		      	
		      	<Results search={this.state.search} name={foundName}/>
		      	
	    	</div>
	    );
	 }
}
