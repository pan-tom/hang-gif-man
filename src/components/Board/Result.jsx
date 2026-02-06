import { MAX_WRONG_GUESSES } from '../../constants'
import ResultImage from './ResultImage'
import { useVibration, useWrongGuesses } from './Result.hooks'
import styles from './Result.module.scss'

const Result = ({ gameResult, letters, onFailed, selectedLetters }) => {
  const { numWrong } = useWrongGuesses(letters, selectedLetters)
  useVibration(numWrong, onFailed)

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
