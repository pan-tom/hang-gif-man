import { useEffect, useState } from 'react'

const useImageLoader = src => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    /* eslint-disable-next-line react-hooks/set-state-in-effect */
    setIsLoaded(false)
    const img = new Image()
    img.onload = () => setIsLoaded(true)
    img.src = src
  }, [src])

  return isLoaded
}

export default useImageLoader
