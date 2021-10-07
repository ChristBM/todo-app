import React from "react"
import './index.css'

export function Header( { children } ) {

  return (
    <header className="header">
      { children }
    </header>
  )
}