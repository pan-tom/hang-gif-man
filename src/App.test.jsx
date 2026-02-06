import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders header and board', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /hang gif man/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /restart game/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('group', { name: /letter keyboard/i })
    ).toBeInTheDocument()
  })
})
