import React, { useContext } from "react"
import { TodoContext } from "../../Context"
import { TodoState } from "../TodoState"
import { SkeletonLoaderList } from "../SkeletonLoader"
import "./index.css"

export function TodoList( { children } ) {

  const { loading, error, totalTodos, min_media, max_media } = useContext( TodoContext )

  const loadReziser = () => {
    if( !(min_media.matches ^ max_media.matches) )
    {
      return window.innerWidth - 90
    }
    else if(min_media.matches){ return 410 }
    else if(max_media.matches){ return 230 }
  }

  const showState = () => { return ( !loading && totalTodos === 0 ) ? true : false }

  const typeState = () => {

    let infoS = {
      'icon': '',
      'title': '',
      'text': ''
    }
    if( !loading && totalTodos === 0 )
    {
      infoS = {
        'icon': 'icon-empty',
        'title': 'Hola!!!',
        'text': 'Parece que no tienes tareas, ¿te gustaría añadir una?'
      }
    }
    if( error )
    {
      infoS = {
        'icon': 'icon-error',
        'title': 'Upss!!!',
        'text': 'Ha ocurrido un Error, por favor revise su conexión y recargue la app.'
      }
    }
    return infoS
  }

  return (
    <section className="list__container">
        { loading && <div className="loading__list">
            <SkeletonLoaderList ancho={ loadReziser() }/>
          </div> }
      <TodoState
        showState={ showState }
        typeState={ typeState }
        />
      <ul>
        { children }
      </ul>
    </section>
  )

}
/* ${ !( !loading && totalTodos === 0 ) && 'display-off' } */