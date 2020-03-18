import React from 'react';

import './button.css';

const styles = {
  // button: {
  //   // backgroundColor: 'grey',
  //   height: 30,
  //   width: 65,
  //   borderRadius: 65 / 2,
  //   borderWidth: 0,
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
}

const STYLES = [
  "btn--primary--solid",
  "btn--selected--solid"
]

const SIZES = [
  "btn--medium",
  "btn--small"
]

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {

  const getButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const getButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`btn ${getButtonStyle} ${getButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
