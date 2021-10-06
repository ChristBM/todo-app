import React, { useState, createContext } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const TodoContext = createContext()

export function TodoProvider( props ) {

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage( 'TODOs_V1', [] )

  const [ searchValue, setSearchValue ] = useState('')

  const [ openModal, setOpenModal ] = useState( false )

  const [ rotateAdd, setRotateAdd ] = useState('add__icon_container')

  const completedTodos = todos.filter( todo => !!todo.complete).length
  const totalTodos = todos.length

  let searchedTodos = []
  if(!searchValue.length >= 1)
  {
    searchedTodos = todos
  }
  else
  {
    searchedTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes( searchText )
    })
  }

  const addTodo = text => {

    const newTodos = [ ...todos ]
    const hay_uno_igual = newTodos.some( some => text === some.text )
    if( hay_uno_igual ) {
      console.log('no se puede añadir el todo porque hay uno igual')
      return true
    }
    else {
      newTodos.unshift( {
        text,
        completed: false
      } )
      saveTodos( newTodos )
      setOpenModal( false )
      setRotateAdd( 'add__icon_container' )
      return false
    }

  }

  const completeTodo = text => {
    const todoIndex = todos.findIndex( todo => todo.text === text )

    const newTodos = [ ...todos ]
    newTodos[ todoIndex ].complete = true
    saveTodos( newTodos )
  }

  const deleteTodo = text => {
    const todoIndex = todos.findIndex( todo => todo.text === text )

    const newTodos = [ ...todos ]
    newTodos.splice( todoIndex, 1 )
    saveTodos( newTodos )
  }

  const min_media = matchMedia('(min-width: 320px)')
  const max_media = matchMedia('(max-width: 500px)')

  return (
    <TodoContext.Provider
      value={
        { totalTodos,
          completedTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          loading,
          error,
          openModal,
          setOpenModal,
          addTodo,
          rotateAdd,
          setRotateAdd,
          min_media,
          max_media,
        }
      }
    >
      { props.children }
    </TodoContext.Provider>
  )
}