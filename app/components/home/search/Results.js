import React from "react";

import Emoji from './results/Emoji';
import RandomEmoji from './results/RandomEmoji';
import SearchEmoji from './results/SearchEmoji';

export default class Contact extends React.Component {

  render() {  

    console.log(this.props);

  	let result = null;

    if (this.props.search == ''){

      result = <SearchEmoji />;

    }
  	else if (this.props.name == null) {

      result = <RandomEmoji search={this.props.search}/>;

    } else {

      result = <Emoji emoji={this.props.name.emoji} search={this.props.search}/>;

    }

    return (

      	<div className="emoji_wrap">

      		{result}

        </div>

    );

  }

}
