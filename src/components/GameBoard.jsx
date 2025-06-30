import React, { useState } from 'react'



const initialBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard() {

  const [gameState,setGameState]=useState(initialBoard);

  function handleBtnClick(rowIndex,colIndex){
    const updatedGameState=[...gameState.map((row)=>[...row])];
    updatedGameState[rowIndex][colIndex]='X';
    setGameState(updatedGameState);
  }
  return (
    <>
    <div className="row row-cols-3 m-0 text-center p-3 g-1">
        {gameState.map((row,rowIndex)=>row.map((symbol,colIndex)=>
          <div key={`${rowIndex}${colIndex}`} className="col d-flex justify-content-center align-items-center">
            <button className='mt-2 border-0 fs-1 fw-bold' style={{width:'80px',height:'80px'}}
            onClick={()=>handleBtnClick(rowIndex,colIndex)}>{symbol}</button>
          </div>
        ))}
    </div>
    </>
  )
}
