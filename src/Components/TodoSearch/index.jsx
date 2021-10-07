import React from "react"
import "./index.css"

export function TodoSearch( { searchValue, setSearchValue } ) {

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