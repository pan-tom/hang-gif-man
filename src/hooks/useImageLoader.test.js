import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { renderHook, waitFor, act } from '@testing-library/react'
import useImageLoader from './useImageLoader'

describe('useImageLoader', () => {
  let mockImageInstances

  beforeEach(() => {
    mockImageInstances = []
    global.Image = vi.fn(function () {
      const img = {
        onload: null,
        onerror: null,
        src: '',
      }
      mockImageInstances.push(img)
      return img
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns false initially', () => {
    const { result } = renderHook(() => useImageLoader('/test-image.gif'))
    expect(result.current).toBe(false)
  })

  it('returns true after image loads', async () => {
    const { result } = renderHook(() => useImageLoader('/test-image.gif'))

    expect(mockImageInstances.length).toBe(1)
    const img = mockImageInstances[0]
    expect(img.src).toBe('/test-image.gif')

    // Simulate image load
    act(() => {
      img.onload()
    })

    await waitFor(() => {
      expect(result.current).toBe(true)
    })
  })

  it('resets to false when src changes', async () => {
    const { result, rerender } = renderHook(
      ({ src }) => useImageLoader(src),
      {
        initialProps: { src: '/image1.gif' },
      }
    )

    expect(mockImageInstances.length).toBe(1)
    const img1 = mockImageInstances[0]
    expect(img1.src).toBe('/image1.gif')

    // Load first image
    act(() => {
      img1.onload()
    })

    await waitFor(() => {
      expect(result.current).toBe(true)
    })

    // Change src
    act(() => {
      rerender({ src: '/image2.gif' })
    })

    // Should reset to false
    expect(result.current).toBe(false)
    expect(mockImageInstances.length).toBe(2)

    // Load second image
    const img2 = mockImageInstances[1]
    expect(img2.src).toBe('/image2.gif')
    act(() => {
      img2.onload()
    })

    await waitFor(() => {
      expect(result.current).toBe(true)
    })
  })

  it('creates new Image instance when src changes', () => {
    const { rerender } = renderHook(
      ({ src }) => useImageLoader(src),
      {
        initialProps: { src: '/image1.gif' },
      }
    )

    expect(mockImageInstances.length).toBe(1)

    rerender({ src: '/image2.gif' })
    expect(mockImageInstances.length).toBe(2)

    rerender({ src: '/image3.gif' })
    expect(mockImageInstances.length).toBe(3)
  })
})
