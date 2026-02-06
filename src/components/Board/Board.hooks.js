import { useCallback, useState } from 'react'
import { GAME_RESULT, MESSAGES } from '../../constants'
import wordsList from '../../data/words.json'

const getRandomWordLetters = () => {
  const randomKey = Math.floor(Math.random() * wordsList.length)
  return wordsList[randomKey].toUpperCase().split('')
}

export const useHangmanGame = () => {
  const [wordLetters, setWordLetters] = useState(() => getRandomWordLetters())
  const [selectedLetters, setSelectedLetters] = useState([])
  const [gameResult, setGameResult] = useState(null)

  const restartGame = useCallback(() => {
    setWordLetters(getRandomWordLetters())
    setSelectedLetters([])
    setGameResult(null)
  }, [])

  const handleKeyClick = useCallback(letter => {
    setSelectedLetters(prevLetters => [...prevLetters, letter])
  }, [])

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

  return {
    wordLetters,
    selectedLetters,
    gameResult,
    restartGame,
    handleKeyClick,
    onFailed,
    onSucceed,
    gameStatusMessage,
  }
}
