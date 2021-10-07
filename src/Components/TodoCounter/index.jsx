import React from "react"
import { SkeletonLoaderCounter } from "../SkeletonLoader"
import "./index.css"

export function TodoCounter( { totalTodos, completedTodos, loading, min_media, max_media } ) {

  const loadReziser = () => {
    if( !(min_media.matches ^ max_media.matches) )
    {
      return window.innerWidth - 90
    }
    else if(min_media.matches){ return 410 }
    else if(max_media.matches){ return 230 }
  }

  return (
    <section className="counter__container">
      { loading && <div className="loading__counter">
          <SkeletonLoaderCounter ancho={ loadReziser() }/>
        </div> }
      <h2 className="counter__text"
      >Has completado <span className="counter__text-completed">{ completedTodos } </span>
        de <span className="counter__text-total">{ totalTodos }</span>
      </h2>
    </section>

  )

}