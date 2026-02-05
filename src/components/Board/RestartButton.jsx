import React from 'react'
import styles from './RestartButton.module.scss'

const RestartButton = ({ disabled, onClick }) => (
  <button
    className={styles.btn}
    disabled={disabled}
    onClick={onClick}
    aria-label="Restart game"
    aria-disabled={disabled}
  >
    RESTART GAME
  </button>
)

export default RestartButton
