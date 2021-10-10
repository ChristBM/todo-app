import React from "react"
import "./index.css"

export function TodoList( props ) {

  const calcularAlto = () => {
    return window.innerHeight - 160
  }

  return (

    <main className="main__container">
      <section className={ props.loading ? 'list__container app-loading' : 'list__container app-ready'}>

        { props.loading && props.onLoading( calcularAlto() ) }

        { props.error && props.onError() }

        { ( !props.loading && !props.totalTodos ) && props.onEmpty() }

        { ( !props.searchedTodos.length && props.totalTodos && props.searchValue ) ? props.onNotFound() : props.onClean() }

        <ul>
          { props.searchedTodos.map( props.render ) }
        </ul>

      </section>

      { props.children }

    </main>

  )

}