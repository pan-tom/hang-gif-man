import React, { useEffect } from 'react'
import { GAME_RESULT } from '../../constants'
import styles from './Letters.module.scss'

const Letters = ({ gameResult, letters, onSucceed, selectedLetters }) => {
  const gameFailed = gameResult === GAME_RESULT.FAILED

  useEffect(() => {
    const success = letters.every(letter => selectedLetters.includes(letter))
    if (success) {
      onSucceed()
    }
  }, [letters, onSucceed, selectedLetters])

  const revealedWord = letters
    .map(letter => (selectedLetters.includes(letter) || gameFailed ? letter : '_'))
    .join(' ')

  return (
    <div
      className={styles.container}
      role="group"
      aria-label="Word to guess"
    >
      <div className="sr-only" aria-live="polite">
        Word: {revealedWord}
      </div>
      {letters.map((letter, index) => {
        const showLetter = selectedLetters.includes(letter)
        let letterClasses = [styles.letter]
        if (gameFailed && !showLetter) {
          letterClasses.push(styles['letter-failed'])
        }
        return (
          <div
            key={index}
            className={letterClasses.join(' ')}
            aria-label={showLetter || gameFailed ? `Letter ${letter}` : 'Hidden letter'}
            aria-hidden="false"
          >
            {(showLetter || gameFailed) && letter}
          </div>
        )
      })}
    </div>
  )
}

export default Letters
