import React from "react";

import emojione  from 'emojione';

import Share from './randomemoji/Share';

export default class Emoji extends React.Component {

  render() {

    let emoji = this.props.emoji;

    emojione.imageType = 'svg';

    emojione.unicodeAlt = false;

    let image = emojione.shortnameToImage(emoji);

    let imageUni = emojione.shortnameToUnicode(emoji);

    let output = {__html: image};

    return (

      <div>
      	<div dangerouslySetInnerHTML={output} />
      	<Share emojis={emoji} search={this.props.search} />
      </div>
      
    );
  }
}
