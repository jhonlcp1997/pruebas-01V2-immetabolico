import { Dispatch, SetStateAction, useState } from 'react';
import style from './PopupPerfil.module.css';

interface Props{
  active: boolean;
  // toggleActive: Dispatch<SetStateAction<boolean>>
  toggleActive: Function
}

export const PopupPerfil = ({active, toggleActive}: Props) => {
  const [moveOut, setMoveOut] = useState(false);

  const  onClickOnDiv= ()=>{
    if(moveOut) return toggleActive(true);
  }

  return (
    <div 
        className={ active ? style.desactive : style.popupPerfil}
        onClick={onClickOnDiv}
      >
      <div className={style.popupPerfil__box}>
        <div 
            onMouseEnter={()=>setMoveOut(false)} 
            onMouseLeave={()=>setMoveOut(true)} 
            className={style.boxcontent}
          >
          <button className={style.button}>Perfil</button>
          <button className={style.button}>Configuraciones</button>
          <button className={style.button}>Salir</button>
        </div>
      </div>
    </div>
  )
}
