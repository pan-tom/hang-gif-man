import { useEffect } from 'react'
import { MAX_WRONG_GUESSES, VIBRATION } from '../../constants'
import ResultImage from './ResultImage'
import styles from './Result.module.scss'

const vibration = duration => {
  if (navigator.vibrate) {
    navigator.vibrate(duration)
  }
}

const Result = ({ gameResult, letters, onFailed, selectedLetters }) => {
  const wrongLetters = selectedLetters.filter(
    letter => !letters.includes(letter)
  )
  const numWrong = wrongLetters.length

  useEffect(() => {
    if (numWrong === MAX_WRONG_GUESSES) {
      vibration(VIBRATION.GAME_LOST)
      onFailed()
    } else {
      if (numWrong > 0) {
        vibration(...VIBRATION.WRONG_GUESS)
      }
    }
  }, [numWrong, onFailed])

  return (
    <div className={styles.container} role="status" aria-live="polite">
      <ResultImage gameResult={gameResult} numWrong={numWrong} />
      <div
        aria-label={`Number of wrong guesses: ${numWrong} out of ${MAX_WRONG_GUESSES}`}
      >
        WRONG: {numWrong}/{MAX_WRONG_GUESSES}
      </div>
    </div>
  )
}

export default Result
