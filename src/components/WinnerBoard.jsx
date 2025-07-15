import React from 'react'
import style from './WinnerBoard.module.css';

export default function WinnerBoard({playerWon,onClickReset}) {
  return (
    <div className={`position-absolute top-50 start-50 translate-middle ${style.container}`}>
      <h1 className='text-white'>Game End</h1>
      <p>{playerWon?`${playerWon} won !`:'Match Draw !'}</p>
      <button onClick={onClickReset}>Rematch</button>
    </div>
  )
}
