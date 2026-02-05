import React, { useCallback, useEffect, useState } from 'react'

import Keyboard from './Keyboard'
import Letters from './Letters'
import RestartButton from './RestartButton'
import Result from './Result'
import wordsList from '../../data/words.json'

const getRandomWordLetters = () => {
  const randomKey = Math.floor(Math.random() * wordsList.length)
  return wordsList[randomKey].toUpperCase().split('')
}

const Board = () => {
  const [wordLetters, setWordLetters] = useState([])
  const [selectedLetters, setSelectedLetters] = useState([])
  const [gameResult, setGameResult] = useState(null)

  const startGame = () => {
    setWordLetters(getRandomWordLetters())
    setSelectedLetters([])
    setGameResult(null)
  }

  const handleKeyClick = letter => {
    setSelectedLetters(prevLetters => [...prevLetters, letter])
  }

  const onFailed = useCallback(() => {
    setGameResult('failed')
  }, [])

  const onSucceed = useCallback(() => {
    setGameResult('succeed')
  }, [])

  useEffect(() => {
    startGame()
  }, [])

  const gameStatusMessage =
    gameResult === 'succeed'
      ? 'Congratulations! You won the game!'
      : gameResult === 'failed'
        ? 'Game over! You ran out of guesses.'
        : ''

  return (
    <>
      <RestartButton onClick={startGame} disabled={!selectedLetters.length} />
      <Result
        gameResult={gameResult}
        letters={wordLetters}
        selectedLetters={selectedLetters}
        onFailed={onFailed}
      />
      {gameStatusMessage && (
        <div role="status" aria-live="polite" className="sr-only">
          {gameStatusMessage}
        </div>
      )}
      {wordLetters.length > 0 && (
        <>
          <Letters
            gameResult={gameResult}
            letters={wordLetters}
            selectedLetters={selectedLetters}
            onSucceed={onSucceed}
          />
          <Keyboard
            handleKeyClick={handleKeyClick}
            selectedLetters={selectedLetters}
            disabled={gameResult !== null}
          />
        </>
      )}
    </>
  )
}

export default Board
