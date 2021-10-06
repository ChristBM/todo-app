import React, { useContext } from "react"
import { Header } from "../Components/Header"
import { TodoContext } from "../Context"
import { TodoCounter } from "../Components/TodoCounter"
import { TodoList } from "../Components/TodoList"
import { TodoItem } from "../Components/TodoItem"
import { CreateTodoButtom } from "../Components/CreateTodoButtom"
import { Modal } from "../Components/Modal"
import { TodoForm } from "../Components/TodoForm/index"

export function AppUI () {

  const { completeTodo, deleteTodo, searchedTodos, openModal } = useContext(TodoContext)

  return (
    <>
      <Header />

      <TodoCounter />

      <TodoList>
        { searchedTodos.map( todo => (
          <TodoItem
              key={ todo.text }
              text={ todo.text }
              completed={ todo.complete }
              onComplete={ () => completeTodo( todo.text ) }
              onDelete={ () => deleteTodo( todo.text ) }
          />
        ) ) }
      </TodoList>

      { openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButtom />
    </>
  )

}