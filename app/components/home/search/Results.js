import React from "react";

import Emoji from './results/Emoji';

import RandomEmoji from './results/RandomEmoji';

export default class Contact extends React.Component {

  render() {

  	let result = null;

  	if (this.props.name == null) {

      // console.log('random', this.props.search);

      result = <RandomEmoji search={this.props.search}/>;

    } else {

      // console.log('not random',  this.props.name.emoji);

      result = <Emoji emoji={this.props.name.emoji} search={this.props.search}/>;

    }



    return (
      	<div className="emoji_wrap">
      		{result}
        </div>
    );
  }
}
