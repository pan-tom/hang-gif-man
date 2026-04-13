import { useEffect } from 'react'
import { type GameResult, GAME_RESULT } from '@/constants'
import styles from './Letters.module.scss'

type LettersProps = {
  gameResult: GameResult | null
  letters: string[]
  onSucceed: () => void
  selectedLetters: string[]
}

const Letters = ({ gameResult, letters, onSucceed, selectedLetters }: LettersProps) => {
  const gameFailed = gameResult === GAME_RESULT.FAILED

  useEffect(() => {
    const success = letters.every((letter) => selectedLetters.includes(letter))
    if (success) {
      onSucceed()
    }
  }, [letters, onSucceed, selectedLetters])

  return (
    <div className={styles.container} role="group" aria-label="Word to guess">
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
            aria-hidden={false}
          >
            {(showLetter || gameFailed) && letter}
          </div>
        )
      })}
    </div>
  )
}

export default Letters
