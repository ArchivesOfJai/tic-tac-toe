import React, { useState } from 'react'
export default function GameBoard({onBtnSelect,board}) {
  
  return (
    <>
    <div className="row row-cols-3 m-0 text-center p-3 g-1">
        {board.map((row,rowIndex)=>row.map((symbol,colIndex)=>
          <div key={`${rowIndex}${colIndex}`} className="col d-flex justify-content-center align-items-center">
            <button className='mt-2 border-0 fs-1 fw-bold' style={{width:'80px',height:'80px'}}
            onClick={()=>onBtnSelect(rowIndex,colIndex)} disabled={symbol!==null}>{symbol}</button>
          </div>
        ))}
    </div>
    </>
  )
}
