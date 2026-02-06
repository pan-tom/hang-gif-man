import React from 'react'
import {
  GAME_RESULT,
  LOADING_IMAGE_SRC,
  MAX_WRONG_GUESSES,
  MEDIA_PATHS,
  MESSAGES,
} from '../../constants'
import useImageLoader from '../../hooks/useImageLoader'

const ResultImage = ({ gameResult, numWrong }) => {
  const src =
    gameResult === GAME_RESULT.SUCCEED
      ? MEDIA_PATHS.SUCCESS
      : `${MEDIA_PATHS.WRONG}${numWrong}`
  const alt =
    gameResult === GAME_RESULT.SUCCEED
      ? MESSAGES.SUCCESS_ANIMATION_ALT
      : MESSAGES.HANGMAN_PROGRESS_ALT(numWrong, MAX_WRONG_GUESSES)

  const isLoaded = useImageLoader(`${src}.gif`)

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
