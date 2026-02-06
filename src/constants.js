export const GAME_RESULT = {
  SUCCEED: 'succeed',
  FAILED: 'failed',
}

export const MAX_WRONG_GUESSES = 6

export const VIBRATION = {
  GAME_LOST: 300,
  WRONG_GUESS: [100, 100],
}

const KEYBOARD = {
  FIRST_LETTER_CODE: 65, // 'A'
  LAST_LETTER_CODE: 90, // 'Z'
  ENTER: 'Enter',
  SPACE: ' ',
}

export const ACTIVATION_KEYS = [KEYBOARD.ENTER, KEYBOARD.SPACE]

export const LETTER_KEYS = (() => {
  const keys = []
  for (let code = KEYBOARD.FIRST_LETTER_CODE; code <= KEYBOARD.LAST_LETTER_CODE; code++) {
    keys.push(String.fromCharCode(code))
  }
  return keys
})()

export const MEDIA_PATHS = {
  SUCCESS: '/media/success',
  WRONG: '/media/wrong',
}

export const MESSAGES = {
  GAME_WON: 'Congratulations! You won the game!',
  GAME_OVER: 'Game over! You ran out of guesses.',
  SUCCESS_ANIMATION_ALT: 'Success animation - You won the game!',
  HANGMAN_PROGRESS_ALT: (numWrong, maxWrong) =>
    `Hangman progress showing ${numWrong} out of ${maxWrong} incorrect guesses`,
}

export const LOADING_IMAGE_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjBweCIgIGhlaWdodD0iNjBweCIgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0ibGRzLWR1YWwtcmluZyIgc3R5bGU9ImJhY2tncm91bmQ6IG5vbmU7Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiBuZy1hdHRyLXI9Int7Y29uZmlnLnJhZGl1c319IiBuZy1hdHRyLXN0cm9rZS13aWR0aD0ie3tjb25maWcud2lkdGh9fSIgbmctYXR0ci1zdHJva2U9Int7Y29uZmlnLnN0cm9rZX19IiBuZy1hdHRyLXN0cm9rZS1kYXNoYXJyYXk9Int7Y29uZmlnLmRhc2hhcnJheX19IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHI9IjQwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLWRhc2hhcnJheT0iNjIuODMxODUzMDcxNzk1ODYgNjIuODMxODUzMDcxNzk1ODYiIHRyYW5zZm9ybT0icm90YXRlKDEwMS44ODEgNTAgNTApIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgY2FsY01vZGU9ImxpbmVhciIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPjwvY2lyY2xlPjwvc3ZnPg=='
