import React, { useContext, useState } from "react"
import { TodoContext } from "../../Context"
import './index.css'

export function TodoForm() {

  const [ newTodoValue, setNewTodoValue ] = useState('')
  const [ holder, setHolder ] = useState( '¿Tienes algo más que hacer?' )

  const { addTodo, setOpenModal, setRotateAdd } = useContext( TodoContext )

  const onChange = ev => {
    setNewTodoValue( ev.target.value )
  }

  const onCancel = () => {
    setOpenModal( false )
    setRotateAdd( 'add__icon_container' )
  }

  const onAddTodo = ev => {
      ev.preventDefault()
      if( newTodoValue === '' )
      {
        setHolder( 'Por favor no dejes ToDos en blanco ;) esto no es el tetris' )
      }
      else {
        let match = addTodo( newTodoValue )
        if( match )
        {
          setNewTodoValue('')
          setHolder( 'Ya tienes un ToDo igual a ese, escribe uno nuevo o busca el viejo ;)' )
        }
      }
  }

  return (
    <form onSubmit={ onAddTodo } className="modal__form">
      <label className="modal__form_label">¡Añade una nueva tarea!</label>
      <textarea
        className="modal__form_textarea"
        value={ newTodoValue }
        placeholder={ holder }
        onChange={ onChange }
      />
      <div className="modal__button_container">
        <button
          className="button modal__button-cancel"
          type="button"
          onClick={ onCancel }
        >Cancelar</button>
        <button
          className="button modal__button-add"
          type="submit"
        >Añadir</button>
      </div>
    </form>
  )
}