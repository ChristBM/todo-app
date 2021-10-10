import React from "react"
import './index.css'

export function Header( props ) {

  return (
    <header className="header">

      { props.loading ? props.onLoading() : props.onHeaderReady() }

    </header>
  )
}