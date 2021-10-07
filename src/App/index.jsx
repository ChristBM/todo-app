import React from "react"
import { useTodos } from "./Hooks/useTodos"

import { Header } from "../Components/Header"
import { TodoSearch } from "../Components/TodoSearch"
import { TodoLogo } from "../Components/TodoLogo"
import { SkeletonLoaderHeader, SkeletonLoaderList } from "../Components/SkeletonLoader"

import { TodoCounter } from "../Components/TodoCounter"

import { TodoList } from "../Components/TodoList"
import { TodoState } from "../Components/TodoState"
import { TodoItem } from "../Components/TodoItem"

import { CreateTodoButtom } from "../Components/CreateTodoButtom"

import { Modal } from "../Components/Modal"
import { TodoForm } from "../Components/TodoForm/index"

export function App() {

  const {
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
    rotateAdd, setRotateAdd } = useTodos()

  return (
    <>
      <Header>

        { loading &&
            <div className="loading__header">
              <SkeletonLoaderHeader ancho={ loadReziserHeader() }/>
            </div>
        }

        <TodoLogo />

        <TodoSearch
          searchValue={ searchValue }
          setSearchValue={ setSearchValue }
        />

      </Header>

      <TodoCounter
        totalTodos={ totalTodos }
        completedTodos={ completedTodos }
        loading={ loading }
        min_media={ min_media }
        max_media={ max_media }
      />

      <TodoList>

        { loading &&
            <div className="loading__list">
              <SkeletonLoaderList ancho={ loadReziserList() }/>
            </div>
        }

        <TodoState
          showState={ showState }
          typeState={ typeState }
        />

        { searchedTodos.map( todo => (
            <TodoItem
                key={ todo.text }
                text={ todo.text }
                completed={ todo.complete }
                onComplete={ () => completeTodo( todo.text ) }
                onDelete={ () => deleteTodo( todo.text ) }
            />
            )
          )
        }

      </TodoList>

      { openModal && (
          <Modal>
            <TodoForm
              addTodo={ addTodo }
              setOpenModal={ setOpenModal }
              setRotateAdd={ setRotateAdd }
            />
          </Modal>
        )
      }

      <CreateTodoButtom
        loading={ loading }
        setOpenModal={ setOpenModal }
        rotateAdd={ rotateAdd }
        setRotateAdd={ setRotateAdd }
      />
    </>
  )

}