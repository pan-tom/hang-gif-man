import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback
  }
  disconnect() {}
  observe(element) {
    // Immediately trigger callback as if element is visible
    this.callback([{ intersectionRatio: 1, target: element }], this)
  }
  takeRecords() {
    return []
  }
  unobserve() {}
}

afterEach(() => {
  cleanup()
})
