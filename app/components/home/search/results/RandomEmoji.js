import React from "react";

import emojione  from 'emojione';

import Share from './randomemoji/Share';

import emojicodes from '../../../../data/emojicodes';

let share = "";

export default class RandomEmoji extends React.Component {

  randomEmoji(){

    let tmpList = Object.keys(emojicodes);

    let randomPropertyName = tmpList[ Math.floor(Math.random()*tmpList.length) ];

    let propertyValue = emojicodes[randomPropertyName];

    let emoji = propertyValue.alpha_code;

    return emoji;   

  }

  emojiName(){

    let name = "";

    let names = Math.floor(Math.random() * 3) + 2;  

    for (var i = 1; i <= names; i++) {

      name += " ";
      
      name += (this.randomEmoji());

    }

    share = name;
    
    return name;

  }

  createEmojiNameImage(){

    let emoji = this.emojiName();

    // emojione.imageType = 'svg';

    emojione.unicodeAlt = false;

    let image = emojione.shortnameToImage(emoji);

    let output = {__html: image};

    return output;

  }


  render() {

    return (
      <div>
        <div dangerouslySetInnerHTML={this.createEmojiNameImage()} />
        <Share emojis={share} search={this.props.search} />
      </div>
      
    );

  }
}
