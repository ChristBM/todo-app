import { useState, useEffect } from "react"

export function useLocalStorage( itemName, initialValue ) {

  const [ loading, setLoading ] = useState( true )
  const [ error, setError ] = useState( false )
  const [ item, setItem ] = useState( initialValue )

  useEffect( () => {

    setTimeout( () => {

      try {
        const localStorageItems = localStorage.getItem( itemName )
        let parsedItems

        if( !localStorageItems )
        {
            localStorage.setItem( itemName, JSON.stringify( initialValue ) )
            parsedItems = []
        }
        else
        {
            parsedItems = JSON.parse( localStorageItems )
        }

        setItem( parsedItems )
        setLoading( false )
      }
      catch(error) {
        setError( error )
      }

    }, 1000 )

  })

  const saveItem = newItem => {

    try {
      const stringifiedItem = JSON.stringify( newItem )
      localStorage.setItem( itemName, stringifiedItem )
      setItem( newItem )
    }
    catch(error) {
      setError( error )
    }

  }

  return { item, saveItem, loading, error }
}