import React, { useState } from "react"
import { TodoIcon } from "../TodoIcon"
import "./index.css"

export function TodoItem( props ) {

  const [ iconTrash, setIconTrash ] = useState('Trash')

  return (
    <li className="todo-item">

      <div
          title="Click para eliminar la tarea"
          className="item__icon-close"
          onClick={ props.onDelete }
          onMouseOver={ () => setIconTrash('Trash_open') }
          onMouseLeave={ () => setIconTrash('Trash') }
      >
        <TodoIcon typeIcon={ iconTrash }/>

      </div>

      <div
          title="Click para marcar como completada"
          className={`item__icon_task ${ props.completed && 'task-completed' }` }
          onClick={ props.onComplete }
      >
        <TodoIcon typeIcon={`${ props.completed && 'Check' }` }/>
      </div>

      <p className={`item__text ${ props.completed && 'text-completed' }` }>{ props.text }</p>
    </li>
  )

}