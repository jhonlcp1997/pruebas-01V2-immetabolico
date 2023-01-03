import React from 'react'

export const FormOne = () => {
  return (
    <form className="form">
      <div className="box-one">
        <input className="find" type="text" placeholder="Ingresar medicamento..." />
        <img className="settings" src="../../image/icons/settings-sliders.svg" alt="" />
        <input className="submit" type="submit" value="Buscar" />
      </div>
    </form>
  )
}
