import { useState } from "react"
import { useLocalStorage } from "./useLocalStorage"

export function useTodos( ) {

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

  const loadReziserHeader = () => {
    if( !(min_media.matches ^ max_media.matches) )
    {
      return window.innerWidth
    }
    else if(min_media.matches){ return 500 }
    else if(max_media.matches){ return 320 }
  }

  const loadReziserList = () => {
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

    {
      loading,
      loadReziserHeader,
      searchValue, setSearchValue,
      totalTodos,
      completedTodos,
      min_media,
      max_media,
      loadReziserList,
      showState,
      typeState,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal, setOpenModal,
      rotateAdd, setRotateAdd
    }

  )

}