import React from 'react';

// Done in SVG so we can avoid importing any CSS

const CloseTextButton = () => {
  const style = {
    padding: '10px',
    color: 'gray'
  }
  return <button style={style}>閉じる</button>
};

export default CloseTextButton;
