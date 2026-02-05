// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

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
