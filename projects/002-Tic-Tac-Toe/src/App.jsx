import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import './App.css'

import { TURNS } from './constants.js'
import { checkWinnerFrom } from './logic/board.js'
import { WinnerModal } from './components/Winners.jsx'


function App() {

  const [board, setBoard] = useState(()=>{
    const boardStorage = window.localStorage.getItem('board')
    return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(()=>{
    const turnStorage = window.localStorage.getItem('turn')
    return turnStorage ??  TURNS.X
    
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('turn')
    window.localStorage.removeItem('board')

  }

  const checkEndGame = (newBoard) =>{
    return newBoard.every((Square) => Square !== null)
  }

  const updateBoard = (index) =>{
    if(board[index] || winner) {return}

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)


    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } 
    else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  
}


  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar Juego</button>
      <section className='game'>
        {
          board.map((_, index) =>{
            return(
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

    <WinnerModal
    resetGame = {resetGame} winner={winner}/>

    </main>
  )
}

export default App
