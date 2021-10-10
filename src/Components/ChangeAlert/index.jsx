import React from "react"
import { withStorageListener } from "./withStorageListener"
import "./index.css"

function ChangeAlert( { show, toggleShow } ) {
    if(show) {
      return (
              <div className="modal">
                <div className="modal__form">
                  <p className="modal__form_label modal__reload_text"
                  >Al parecer hubo cambios en la app desde otra ventana o pestaña del navegador. Necesitas Recargar la app para traer esos cambios.
                  </p>
                  <button
                    className="button modal__button-cancel"
                    onClick={ () => toggleShow( false ) }
                  >
                    Recargar
                  </button>
                </div>
              </div>
              )
    }
    else{
        return null
    }
}

export const ChangeAlertWithStorageListener = withStorageListener( ChangeAlert )