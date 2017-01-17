import React from "react";
import { Link } from "react-router";

import Emoji from '../components/shared/Emoji';
import Name from '../components/shared/Name';


export default class Shared extends React.Component {

  	render() {
    	return (

    		<div>
    			<Name name={this.props.location.query.name}/>

    			<div className="emoji_wrap">
					<Emoji emoji={this.props.location.query.emoji}/>
				</div>

				<Link to="/">Create!</Link>
    		</div>
    		
    	);
  }
}
