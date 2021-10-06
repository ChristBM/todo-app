import React from "react"
import ReactDOM from 'react-dom'
import './index.css'

export function Modal( { children } ) {
    return ReactDOM.createPortal(
        <div className="modal">
            { children }
        </div> , document.getElementById('modal') )
}