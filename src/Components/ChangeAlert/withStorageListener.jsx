import React, { useState } from "react"

export function withStorageListener( WrappedComponent ) {
  return function WrappedComponentWithStoragelistener( props ) {

  const [ storageChange, setStorageChange ] = useState( false )

  window.addEventListener('storage', ( change ) => {
    if( change.key === 'TODOs_V1')
    {
      console.log('Hubo cambios en TODOs_V1')
      setStorageChange( true )
    }
  })

  const toggleShow = () => {
    props.reload()
    setStorageChange( false )
  }
  return (
      <WrappedComponent
          show={ storageChange }
          toggleShow={ toggleShow }
      />
    )
  }
}