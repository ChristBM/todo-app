import React from "react"
import { AppUI } from "./AppUI.jsx"
import { TodoProvider } from "../Context"

export function App() {

  return (
    <TodoProvider>
      <AppUI className="app"/>
    </TodoProvider>
  )

}