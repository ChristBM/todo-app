import React, { useContext } from "react"
import { TodoContext } from "../../Context"
import "./index.css"

export function TodoSearch() {

	const { searchValue, setSearchValue } = useContext(TodoContext)

	const onSearchValueChange = ev => {
		console.log( ev.target.value )
		setSearchValue( ev.target.value )
	}

	return (
		<input
			className="TodoSearch"
			placeholder="Encuentra un ToDo :)"
			value={ searchValue }
			onChange={ onSearchValueChange }
		/>
	)

}