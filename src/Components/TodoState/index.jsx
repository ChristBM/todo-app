import React from 'react'
import './index.css'

export function TodoState( props ) {

  const onOffState = () => { return props.showState() ? 'state__container' : 'display-off' }

  let objState = props.typeState()

  return (
    <div className={ onOffState() }>
      <div className={ objState['icon'] }>
      </div>
      <h3 className="state__container_title">{ objState['title'] }</h3>
      <p className="state__container_text">{ objState['text'] }</p>
    </div>
  )
}