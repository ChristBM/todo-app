import React from 'react'
import './index.css'

export function TodoState( { value, clean } ) {

  const showState = () => { return clean ? 'display-off' : 'state__container' }

  const arrayStates = [
    {
      state: 'error',
      icon: 'icon-error',
      title: 'Upss',
      text: 'Ha ocurrido un Error, por favor revise su conexión y recargue la app.'
    },
    {
      state: 'empty',
      icon: 'icon-empty',
      title: 'Hola',
      text: 'Parece que no tienes tareas, ¿te gustaría añadir una?'
    },
    {
      state: 'notfound',
      icon: 'icon-notfound',
      title: 'Nada',
      text: 'Parece que el ToDo no está, prueba con otra palabra que creas que coincide.'
    },
    {
      state: 'clean',
      icon: '',
      title: '',
      text: ''
    }
  ]

  return (
    <div className={ showState() }>

      <div className={ arrayStates[value].icon }></div>

      <h3 className="state__container_title">{ arrayStates[value].title }</h3>

      <p className="state__container_text">{ arrayStates[value].text }</p>

    </div>
  )
}