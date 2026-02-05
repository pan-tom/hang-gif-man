import React, { useMemo } from 'react'

import styles from './Keyboard.module.scss'

export default ({ disabled, handleKeyClick, selectedLetters }) => {
  const getKeys = useMemo(() => {
    let keys = []
    for (let code = 65; code <= 90; code++) {
      keys.push(String.fromCharCode(code))
    }
    return keys
  }, [])

  return (
    <div className={styles.container}>
      {getKeys.map(letter => (
        <button
          key={letter}
          onClick={() => handleKeyClick(letter)}
          disabled={disabled || selectedLetters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}
