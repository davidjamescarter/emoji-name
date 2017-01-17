import React from "react";


export default class ShareBox extends React.Component {

	componentDidMount(){

		document.getElementById('share_box-overlay-id').select();;

	}

	render() {

	    return (	
	    	<div className="share_box-overlay">
	    		<h2>Share this url</h2>
			    <input id="share_box-overlay-id" value={this.props.url} />
			    <button className="share_box-overlay-close">x</button>
	    	</div>
	    )
	 }
}
