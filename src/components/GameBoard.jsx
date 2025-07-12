import React, { useState } from 'react'


const initialBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null],
]

export default function GameBoard({onBtnSelect,turns}) {

  let gameState=initialBoard;

  for(const turn of turns){
    let {box,player}=turn;
    let {row,col}=box;
    gameState[row][col]=player;
  }

  // const [gameState,setGameState]=useState(initialBoard);


  // function handleBtnClick(rowIndex,colIndex){
  //   const updatedGameState=[...gameState.map((row)=>[...row])];
  //   updatedGameState[rowIndex][colIndex]=currentPlayer;
  //   setGameState(updatedGameState);
  //   onBtnSelect(rowIndex,colIndex);
  // }

  
  return (
    <>
    <div className="row row-cols-3 m-0 text-center p-3 g-1">
        {gameState.map((row,rowIndex)=>row.map((symbol,colIndex)=>
          <div key={`${rowIndex}${colIndex}`} className="col d-flex justify-content-center align-items-center">
            <button className='mt-2 border-0 fs-1 fw-bold' style={{width:'80px',height:'80px'}}
            onClick={()=>onBtnSelect(rowIndex,colIndex)} disabled={symbol!==null}>{symbol}</button>
          </div>
        ))}
    </div>
    </>
  )
}
