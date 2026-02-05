import React, { useMemo } from 'react'

import styles from './Keyboard.module.scss'

const Keyboard = ({ disabled, handleKeyClick, selectedLetters }) => {
  const getKeys = useMemo(() => {
    let keys = []
    for (let code = 65; code <= 90; code++) {
      keys.push(String.fromCharCode(code))
    }
    return keys
  }, [])

  const handleKeyDown = (e, letter) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!disabled && !selectedLetters.includes(letter)) {
        handleKeyClick(letter)
      }
    }
  }

  return (
    <div className={styles.container} role="group" aria-label="Letter keyboard">
      {getKeys.map(letter => {
        const isSelected = selectedLetters.includes(letter)
        return (
          <button
            key={letter}
            onClick={() => handleKeyClick(letter)}
            onKeyDown={e => handleKeyDown(e, letter)}
            disabled={disabled || isSelected}
            aria-label={`Select letter ${letter}`}
            aria-pressed={isSelected}
            aria-disabled={disabled || isSelected}
          >
            {letter}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
