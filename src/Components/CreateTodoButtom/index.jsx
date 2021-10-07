import React from "react"
import { TodoIcon } from "../TodoIcon"
import { SkeletonLoaderButton } from "../SkeletonLoader"
import "./index.css"

export function CreateTodoButtom( { setOpenModal, rotateAdd, setRotateAdd, loading } ) {

  const onClickButton = () => {
    setOpenModal( openModal => !openModal )
    if( rotateAdd === 'add__icon_container')
    {
      setRotateAdd( 'add__icon_container-active' )
    }
    else {
      setRotateAdd( 'add__icon_container' )
    }
  }

  return (
    <button
      className="CreateTodoButton"
      onClick={ onClickButton }
    >
      { loading && <div className="loading__btn">
            <SkeletonLoaderButton />
          </div> }
      <span className={ rotateAdd }>
        <TodoIcon typeIcon='Add'/>
      </span>
    </button>
  )

}