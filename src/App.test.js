import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders header and board', () => {
  const { getByText } = render(<App />)
  const headerElement = getByText(/hang gif man/i)
  expect(headerElement).toBeInTheDocument()
})
