import React from "react"
import "./index.css"

export function TodoCounter( props ) {

  return (
    <section className="counter__container">

      { props.loading
          ? props.onLoading()
          : props.totalTodos
              ? props.onCounterReady()
              : props.onEmpty()
      }

    </section>

  )

}