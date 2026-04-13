import { useEffect } from 'react'
import { MAX_WRONG_GUESSES, VIBRATION } from '@/constants'

const vibration = (duration: number | number[]) => {
  if (navigator.vibrate) {
    navigator.vibrate(duration)
  }
}

export const useWrongGuesses = (letters: string[], selectedLetters: string[]) => {
  const wrongLetters = selectedLetters.filter((letter) => !letters.includes(letter))
  const numWrong = wrongLetters.length
  return { wrongLetters, numWrong }
}

export const useVibration = (numWrong: number, onFailed: () => void) => {
  useEffect(() => {
    if (numWrong === MAX_WRONG_GUESSES) {
      vibration(VIBRATION.GAME_LOST)
      onFailed()
    } else {
      if (numWrong > 0) {
        vibration([...VIBRATION.WRONG_GUESS])
      }
    }
  }, [numWrong, onFailed])
}
