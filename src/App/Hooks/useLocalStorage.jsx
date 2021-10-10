import { useState, useEffect } from "react"

export function useLocalStorage( itemName, initialValue ) {

  const [ reload, setReload ] = useState( true )
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
        setReload( true )
      }
      catch(error) {
        setError( error )
      }

    }, 1000 )

  }, [ reload ] )

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

  const sincronize = () => {
    setLoading( true )
    setReload( false )
  }

  return { item, saveItem, loading, error, reload, sincronize }
}