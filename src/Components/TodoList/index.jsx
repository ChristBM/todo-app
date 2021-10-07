import React from "react"
import "./index.css"

export function TodoList( { children } ) {

  return (
    <section className="list__container">
      <ul>
        { children }
      </ul>
    </section>
  )

}