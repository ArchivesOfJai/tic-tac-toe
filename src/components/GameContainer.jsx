import React from 'react'
import style from "./GameContainer.module.css"
export default function GameContainer({children}) {
  return (
   <>
   <div className={style.gameContainer}>
    {children}
   </div>
   </>
  )
}
