import React, { useEffect } from 'react'

import styles from './Letters.module.scss'

const Letters = ({ gameResult, letters, onSucceed, selectedLetters }) => {
  const gameFailed = gameResult === 'failed'

  useEffect(() => {
    const success = letters.every(letter => selectedLetters.includes(letter))
    if (success) {
      onSucceed()
    }
  }, [letters, onSucceed, selectedLetters])

  return (
    <div className={styles.container}>
      {letters.map((letter, index) => {
        const showLetter = selectedLetters.includes(letter)
        let letterClasses = [styles.letter]
        if (gameFailed && !showLetter) {
          letterClasses.push(styles['letter-failed'])
        }
        return (
          <div key={index} className={letterClasses.join(' ')}>
            {(showLetter || gameFailed) && letter}
          </div>
        )
      })}
    </div>
  )
}

export default Letters
