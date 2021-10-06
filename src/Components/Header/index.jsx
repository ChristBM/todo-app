import React, { useContext } from "react"
import { TodoContext } from "../../Context"
import { TodoSearch } from "../TodoSearch"
import { TodoLogo } from "../TodoLogo"
import { SkeletonLoaderHeader } from "../SkeletonLoader"
import './index.css'

export function Header() {

  const { loading, min_media, max_media } = useContext(TodoContext)

  const loadReziser = () => {
    if( !(min_media.matches ^ max_media.matches) )
    {
      return window.innerWidth
    }
    else if(min_media.matches){ return 500 }
    else if(max_media.matches){ return 320 }
  }

  return (
    <header className="header">
      { loading && <div className="loading__header"><SkeletonLoaderHeader ancho={ loadReziser() }/></div> }
      <TodoLogo />
      <TodoSearch />
    </header>
  )
}