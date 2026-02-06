import React, { useEffect, useRef, useState } from 'react'
import {
  GAME_RESULT,
  LOADING_IMAGE_SRC,
  MAX_WRONG_GUESSES,
  MEDIA_PATHS,
  MESSAGES,
} from '../../constants'

const ResultImage = ({ gameResult, numWrong }) => {
  const ref = useRef()
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
    const img = ref.current
    if (img) {
      setIsLoaded(false)
      new IntersectionObserver((entries, observer) => {
        if (entries[0].intersectionRatio) {
          observer.unobserve(img)
          setIsLoaded(true)
        }
      }).observe(img)
    }
  }, [src])

  return (
    <>
      <picture>
        {isLoaded && (
          <>
            <source type="image/webp" srcSet={`${src}.webp`} />
            <source type="image/gif" srcSet={`${src}.gif`} />
          </>
        )}
        <img
          ref={ref}
          alt={alt}
          src={isLoaded ? `${src}.gif` : LOADING_IMAGE_SRC}
        />
      </picture>
    </>
  )
}

export default ResultImage
