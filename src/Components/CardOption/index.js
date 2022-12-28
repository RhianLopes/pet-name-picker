import React from 'react'
import './styles.scss'

export function CardOption(props) {
  return (
    <button id='card-option' onClick={() => props.onClick()}>
      {props.name}
    </button>
  )
}
