import React from "react";

import ShareBox from './share/ShareBox';

export default class Share extends React.Component {

	constructor() {
    	super();
    	this.state = {
      		childVisible: false 
    	};	
  	}

	createUrl(){

		console.log(this.props.search);
		
		let base = window.location.href + 'emoji';

		let name = this.props.search.replace(/ /g,'_');

		let emojis = this.props.emojis.replace(/ /g,'');

		let url = base + '?emoji=' + emojis + '&name='+ name;

		return url;
	}

	onClick() {
    	this.setState({
    		childVisible: !this.state.childVisible
    	});
  	}


	render() {

		var share = 'Share!';
		
		var dontShare = 'Don\'t Share!';

	    return (	
	    	<div className="share_box">
	    			{
	    				this.state.search
	    			}
			        <button className="primary" onClick={this.onClick.bind(this)}>
			           <span>{this.state.childVisible? dontShare : share}</span>
			        </button>
			        {
				   		this.state.childVisible
			            ? <ShareBox url={this.createUrl()} />
			            : null
				    }       
			        
	    	</div>
	    )
	 }
}
