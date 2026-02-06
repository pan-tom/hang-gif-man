import React, { useEffect, useState } from 'react'
import {
  GAME_RESULT,
  LOADING_IMAGE_SRC,
  MAX_WRONG_GUESSES,
  MEDIA_PATHS,
  MESSAGES,
} from '../../constants'

const ResultImage = ({ gameResult, numWrong }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const src =
    gameResult === GAME_RESULT.SUCCEED
      ? MEDIA_PATHS.SUCCESS
      : `${MEDIA_PATHS.WRONG}${numWrong}`
  const alt =
    gameResult === GAME_RESULT.SUCCEED
      ? MESSAGES.SUCCESS_ANIMATION_ALT
      : MESSAGES.HANGMAN_PROGRESS_ALT(numWrong, MAX_WRONG_GUESSES)

  useEffect(() => {
    setIsLoaded(false)
    const img = new Image()
    img.onload = () => setIsLoaded(true)
    img.src = `${src}.gif`
  }, [src])

  return (
    <picture>
      {isLoaded && (
        <>
          <source type="image/webp" srcSet={`${src}.webp`} />
          <source type="image/gif" srcSet={`${src}.gif`} />
        </>
      )}
      <img alt={alt} src={isLoaded ? `${src}.gif` : LOADING_IMAGE_SRC} />
    </picture>
  )
}

export default ResultImage
