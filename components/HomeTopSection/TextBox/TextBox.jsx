import React from 'react';

export default function TextBox({ text }) {
  return <p style={textBoxStyles}>{text}</p>;
}

const textBoxStyles = {
  width: '100%',
  borderTop: '1px solid #FD3560',
  paddingTop: '20px',
};
