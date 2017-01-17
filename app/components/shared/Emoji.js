import React from "react";

import emojione  from 'emojione';

export default class Emoji extends React.Component {

  render() {

    let emoji = this.props.emoji;

    let image = emojione.shortnameToImage(emoji);

    let imageUni = emojione.shortnameToUnicode(emoji);

    let output = {__html: image};

    return (
      
      <div dangerouslySetInnerHTML={output} />

    );
  }
}
