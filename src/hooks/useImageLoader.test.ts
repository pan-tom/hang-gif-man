import { describe, it, expect } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import useImageLoader from './useImageLoader'

describe('useImageLoader', () => {
  it('returns false initially', () => {
    const { result } = renderHook(() => useImageLoader('/test-image.webp'))
    expect(result.current.isLoaded).toBe(false)
  })

  it('returns true after onLoad', () => {
    const { result } = renderHook(() => useImageLoader('/test-image.webp'))

    act(() => {
      result.current.imgProps.onLoad()
    })

    expect(result.current.isLoaded).toBe(true)
  })

  it('resets to false when src changes', () => {
    const { result, rerender } = renderHook(({ src }) => useImageLoader(src), {
      initialProps: { src: '/image1.webp' },
    })

    act(() => {
      result.current.imgProps.onLoad()
    })
    expect(result.current.isLoaded).toBe(true)

    act(() => {
      rerender({ src: '/image2.webp' })
    })
    expect(result.current.isLoaded).toBe(false)

    act(() => {
      result.current.imgProps.onLoad()
    })
    expect(result.current.isLoaded).toBe(true)
  })

  it('marks loaded on onError', () => {
    const { result } = renderHook(() => useImageLoader('/missing.webp'))

    act(() => {
      result.current.imgProps.onError()
    })

    expect(result.current.isLoaded).toBe(true)
  })
})
