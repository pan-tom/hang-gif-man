import {
  type GameResult,
  GAME_RESULT,
  LOADING_IMAGE_SRC,
  MAX_WRONG_GUESSES,
  MEDIA_PATHS,
  MESSAGES,
} from '@/constants'
import useImageLoader from '@/hooks/useImageLoader'

type ResultImageProps = {
  gameResult: GameResult
  numWrong: number
}

const ResultImage = ({ gameResult, numWrong }: ResultImageProps) => {
  const base =
    gameResult === GAME_RESULT.SUCCEED ? MEDIA_PATHS.SUCCESS : `${MEDIA_PATHS.WRONG}${numWrong}`
  const alt =
    gameResult === GAME_RESULT.SUCCEED
      ? MESSAGES.SUCCESS_ANIMATION_ALT
      : MESSAGES.HANGMAN_PROGRESS_ALT(numWrong, MAX_WRONG_GUESSES)

  const imageSrc = `${base}.webp`
  const { isLoaded, imgProps } = useImageLoader(imageSrc)

  return (
    <span className="result-image" style={{ position: 'relative', display: 'inline-block' }}>
      <img
        alt=""
        src={LOADING_IMAGE_SRC}
        aria-hidden
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          opacity: isLoaded ? 0 : 1,
          transition: 'opacity 0.15s',
          pointerEvents: 'none',
        }}
      />
      <img
        alt={alt}
        src={imageSrc}
        {...imgProps}
        style={{
          display: 'block',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.15s',
        }}
      />
    </span>
  )
}

export default ResultImage
