import React from "react"
import { useTodos } from "./Hooks/useTodos"

import { Header } from "../Components/Header"
import { TodoSearch } from "../Components/TodoSearch"
import { TodoLogo } from "../Components/TodoLogo"
import {  SkeletonLoaderHeader,
          SkeletonLoaderList,
          SkeletonLoaderCounter,
          SkeletonLoaderButton } from "../Components/SkeletonLoader"

import { TodoCounter } from "../Components/TodoCounter"

import { TodoList } from "../Components/TodoList"
import { TodoState } from "../Components/TodoState"
import { TodoItem } from "../Components/TodoItem"

import { CreateTodoButtom } from "../Components/CreateTodoButtom"
import { TodoIcon } from "../Components/TodoIcon"

import { Modal } from "../Components/Modal"
import { TodoForm } from "../Components/TodoForm/index"

import { ChangeAlertWithStorageListener } from "../Components/ChangeAlert"

export function App() {

  const {
    loading,
    error,
    loadReziserHeader,
    searchValue, onSearchValueChange,
    totalTodos,
    loadReziserCounter,
    completedTodos,
    loadReziserList,
    searchedTodos,
    completeTodo,
    deleteTodo,
    addTodo,
    openModal, setOpenModal,
    rotateAdd, setRotateAdd,
    onClickTodoButton,
    sincronizeTodos,
    reloadTodos
    } = useTodos()

  return (
    <>

      <Header
        loading={ loading }

        onLoading={ () => <div className="loading__header">
                            <SkeletonLoaderHeader ancho={ loadReziserHeader() }/>
                          </div>
                  }
        onHeaderReady={ () => <>  <TodoLogo />
                                  <TodoSearch
                                    searchValue={ searchValue }
                                    onSearchValueChange={ onSearchValueChange }
                                  />
                              </>
                      }
      />

      <TodoCounter
        loading={ loading }
        totalTodos={ totalTodos }

        onLoading={ () => <div className="loading__counter">
                              <SkeletonLoaderCounter ancho={ loadReziserCounter() }/>
                            </div>
                  }
        onEmpty={ () => <h2 className="counter__text">No tienes tareas aún :)</h2> }
        onCounterReady={ () => <h2 className="counter__text"
                                >Has completado <span className="counter__text-completed">{ completedTodos } </span>
                                  de <span className="counter__text-total">{ totalTodos }</span>
                              </h2>
                        }
      />

      <TodoList
        loading={ loading }
        error={ error }
        searchValue={ searchValue }
        searchedTodos={ searchedTodos }
        totalTodos={ totalTodos }

        onLoading={ (alto) => ( <div className="loading__list">
                                  <SkeletonLoaderList ancho={ loadReziserList() } alto={ alto }/>
                                </div>
                          )
                  }
        onError={ () => <TodoState value={ 0 } clean={ false } /> }
        onEmpty={ () => <TodoState value={ 1 } clean={ false } /> }
        onNotFound={ () => <TodoState value={ 2 } clean={ false }/> }
        onClean={ () => <TodoState value={ 3 } clean={ true }/> }

        render={ todo => (
                    <TodoItem
                        key={ todo.text }
                        text={ todo.text }
                        completed={ todo.complete }
                        onComplete={ () => completeTodo( todo.text ) }
                        onDelete={ () => deleteTodo( todo.text ) }
                    />
                  )
                }
      >

        <CreateTodoButtom
          loading={ loading }
          onClickTodoButton={ onClickTodoButton }

          onLoading={ () => <div className="loading__btn">
                              <SkeletonLoaderButton />
                            </div>
                    }
          onButtonReady={ () => <span className={ rotateAdd }>
                                  <TodoIcon typeIcon='Add'/>
                                </span>
                        }
        />

      </TodoList>

      { (openModal && !loading ) && (
          <Modal
            onShowModal={ () => <TodoForm
                                  addTodo={ addTodo }
                                  setOpenModal={ setOpenModal }
                                  setRotateAdd={ setRotateAdd }
                                />
                        }
          />
        )
      }

      { reloadTodos && (
          <Modal
            onShowModal={ () => <ChangeAlertWithStorageListener reload={ sincronizeTodos }/> }
          />
        )
      }

    </>
  )

}