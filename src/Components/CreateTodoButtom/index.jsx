import React from "react"
import "./index.css"

export function CreateTodoButtom( props ) {

  return (
    <button
      className="add__todo"
      onClick={ props.onClickTodoButton }
    >

      { props.loading ? props.onLoading() : props.onButtonReady() }

    </button>
  )

}