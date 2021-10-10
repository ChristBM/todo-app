import React from "react"
import "./index.css"

export function CreateTodoButtom( props ) {

  return (
    <button
      className="CreateTodoButton"
      onClick={ props.onClickTodoButton }
    >

      { props.loading ? props.onLoading() : props.onButtonReady() }

    </button>
  )

}