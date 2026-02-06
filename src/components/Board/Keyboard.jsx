import { ACTIVATION_KEYS, LETTER_KEYS } from '../../constants'
import styles from './Keyboard.module.scss'

const Keyboard = ({ disabled, handleKeyClick, selectedLetters }) => {

  const handleKeyDown = (e, letter) => {
    if (ACTIVATION_KEYS.includes(e.key)) {
      e.preventDefault()
      if (!disabled && !selectedLetters.includes(letter)) {
        handleKeyClick(letter)
      }
    }
  }

  return (
    <div className={styles.container} role="group" aria-label="Letter keyboard">
      {LETTER_KEYS.map(letter => {
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
