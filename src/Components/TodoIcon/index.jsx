import React from "react"
import './index.css'

export function TodoIcon( { typeIcon } ) {

  const selectClass = () => {
    switch( typeIcon ){
        case 'Trash': return 'icon-trash'
        case 'Trash_open': return 'icon-trash_open'
        case 'Add': return 'icon-add'
        case 'Check': return 'icon-check'
        default: return 'empty'
    }
  }

    return <div className={ `icon_style ${ selectClass() }` } />

}