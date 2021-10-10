import React from "react"
import "./index.css"

export function TodoSearch( { searchValue, onSearchValueChange } ) {

	return (
		<input
			className="TodoSearch"
			placeholder="Encuentra un ToDo :)"
			value={ searchValue }
			onChange={ onSearchValueChange }
		/>
	)

}