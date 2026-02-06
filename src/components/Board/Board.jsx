import { useCallback, useState } from 'react'
import { GAME_RESULT, MESSAGES } from '../../constants'
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
  const [wordLetters, setWordLetters] = useState(() => getRandomWordLetters())
  const [selectedLetters, setSelectedLetters] = useState([])
  const [gameResult, setGameResult] = useState(null)

  const restartGame = () => {
    setWordLetters(getRandomWordLetters())
    setSelectedLetters([])
    setGameResult(null)
  }

  const handleKeyClick = letter => {
    setSelectedLetters(prevLetters => [...prevLetters, letter])
  }

  const onFailed = useCallback(() => {
    setGameResult(GAME_RESULT.FAILED)
  }, [])

  const onSucceed = useCallback(() => {
    setGameResult(GAME_RESULT.SUCCEED)
  }, [])

  const gameStatusMessage =
    gameResult === GAME_RESULT.SUCCEED
      ? MESSAGES.GAME_WON
      : gameResult === GAME_RESULT.FAILED
        ? MESSAGES.GAME_OVER
        : ''

  return (
    <>
      <RestartButton onClick={restartGame} disabled={!selectedLetters.length} />
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
