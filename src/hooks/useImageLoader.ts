import { useCallback, useEffect, useState } from 'react'

/** Tracks readiness for a URL; wire `imgProps` onto the real `<img>` so the asset loads once. */
const useImageLoader = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset when URL changes
    setIsLoaded(false)
  }, [src])

  const onLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const onError = useCallback(() => {
    setIsLoaded(true)
  }, [])

  return {
    isLoaded,
    imgProps: { onLoad, onError },
  }
}

export default useImageLoader
