import { useEffect } from 'react'
import { MAX_WRONG_GUESSES, VIBRATION } from '../../constants'

const vibration = duration => {
  if (navigator.vibrate) {
    navigator.vibrate(duration)
  }
}

export const useWrongGuesses = (letters, selectedLetters) => {
  const wrongLetters = selectedLetters.filter(
    letter => !letters.includes(letter)
  )
  const numWrong = wrongLetters.length
  return { wrongLetters, numWrong }
}

export const useVibration = (numWrong, onFailed) => {
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
}
