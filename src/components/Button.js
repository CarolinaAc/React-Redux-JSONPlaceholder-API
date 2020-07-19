import React from 'react'

const Button = (props) => {
  return (
    <button
      data-testid='button'
      onClick={props.onClick}
      className={`button ${props.type}`}
    >
      {props.text}
    </button>
  )
}

export default Button
