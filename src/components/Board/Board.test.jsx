import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Board from './Board'

describe('Board', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all game components', () => {
    render(<Board />)

    expect(
      screen.getByRole('button', { name: /restart game/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('group', { name: /letter keyboard/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('group', { name: /word to guess/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('disables restart button initially', () => {
    render(<Board />)
    const restartButton = screen.getByRole('button', { name: /restart game/i })
    expect(restartButton).toBeDisabled()
  })

  it('enables restart button after selecting letters', async () => {
    const user = userEvent.setup()
    render(<Board />)

    const restartButton = screen.getByRole('button', { name: /restart game/i })
    expect(restartButton).toBeDisabled()

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const firstButton = within(keyboard).getByRole('button', {
      name: /select letter a/i,
    })

    await user.click(firstButton)

    expect(restartButton).toBeEnabled()
  })

  it('disables keyboard buttons when selected', async () => {
    const user = userEvent.setup()
    render(<Board />)

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttonA = within(keyboard).getByRole('button', {
      name: /select letter a/i,
    })

    expect(buttonA).not.toBeDisabled()

    await user.click(buttonA)

    expect(buttonA).toBeDisabled()
  })

  it('displays wrong guesses count', () => {
    render(<Board />)
    const result = screen.getByRole('status')
    const wrongCount = within(result).getByLabelText(/number of wrong guesses/i)

    expect(wrongCount).toBeInTheDocument()
    expect(wrongCount).toHaveTextContent(/WRONG: \d+\/\d+/)
  })

  it('announces game status messages when game ends', async () => {
    const user = userEvent.setup()
    render(<Board />)

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })

    // Select wrong letters until game ends
    const wrongLetters = ['X', 'Z', 'Q', 'J', 'K', 'W']
    for (const letter of wrongLetters) {
      const button = within(keyboard).getByRole('button', {
        name: new RegExp(`select letter ${letter}`, 'i'),
      })
      if (!button.disabled) {
        await user.click(button)
      }
    }

    // Check for game over message
    const gameOverMessage = screen.getByText(/game over/i, { hidden: true })
    expect(gameOverMessage).toBeInTheDocument()
  })

  it('activates keyboard buttons with Enter key', async () => {
    const user = userEvent.setup()
    render(<Board />)

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttonA = within(keyboard).getByRole('button', {
      name: /select letter a/i,
    })

    buttonA.focus()
    await user.keyboard('{Enter}')

    expect(buttonA).toBeDisabled()
  })

  it('activates keyboard buttons with Space key', async () => {
    const user = userEvent.setup()
    render(<Board />)

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttonB = within(keyboard).getByRole('button', {
      name: /select letter b/i,
    })

    buttonB.focus()
    await user.keyboard(' ')

    expect(buttonB).toBeDisabled()
  })

  it('disables all keyboard buttons when game ends', async () => {
    const user = userEvent.setup()
    render(<Board />)

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })

    // Select wrong letters until game ends
    const wrongLetters = ['X', 'Z', 'Q', 'J', 'K', 'W']
    for (const letter of wrongLetters) {
      const button = within(keyboard).getByRole('button', {
        name: new RegExp(`select letter ${letter}`, 'i'),
      })
      if (!button.disabled) {
        await user.click(button)
      }
    }

    const buttons = within(keyboard).getAllByRole('button')
    buttons.forEach(button => {
      expect(button).toBeDisabled()
    })
  })
})
