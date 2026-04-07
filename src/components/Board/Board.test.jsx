import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, within, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Board from './Board'

/**
 * Single array instance so `words.json` default stays the same reference while
 * tests swap the word (abc vs cat) via splice.
 */
const mockWords = vi.hoisted(() => {
  const list = ['abc']
  return { list }
})

vi.mock('../../data/words.json', () => ({
  default: mockWords.list,
}))

/** Six wrong guesses to lose; none of these appear in the mocked word `abc`. */
const WRONG_LETTERS_TO_LOSE = ['X', 'Z', 'Q', 'J', 'K', 'W']

describe('Board', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockWords.list.splice(0, mockWords.list.length, 'abc')
  })

  it('renders all game components', () => {
    render(<Board />)

    expect(screen.getByRole('button', { name: /restart game/i })).toBeInTheDocument()
    expect(screen.getByRole('group', { name: /letter keyboard/i })).toBeInTheDocument()
    expect(screen.getByRole('group', { name: /word to guess/i })).toBeInTheDocument()
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
    const result = screen.getByRole('status')

    for (const letter of WRONG_LETTERS_TO_LOSE) {
      const button = within(keyboard).getByRole('button', {
        name: new RegExp(`select letter ${letter}`, 'i'),
      })
      await user.click(button)
    }

    // Wait for game to end (wrong count reaches 6 and message appears)
    await waitFor(
      () => {
        const wrongCount = within(result).getByLabelText(/number of wrong guesses/i)
        expect(wrongCount).toHaveTextContent(/WRONG: 6\/6/)
        const gameOverMessage = screen.getByText(/game over/i, { hidden: true })
        expect(gameOverMessage).toBeInTheDocument()
      },
      { timeout: 3000 }
    )
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

    for (const letter of WRONG_LETTERS_TO_LOSE) {
      const button = within(keyboard).getByRole('button', {
        name: new RegExp(`select letter ${letter}`, 'i'),
      })
      await user.click(button)
    }

    await waitFor(() => {
      const buttons = within(keyboard).getAllByRole('button')
      buttons.forEach((button) => {
        expect(button).toBeDisabled()
      })
    })
  })

  it('disables all keyboard buttons when player wins', async () => {
    mockWords.list.splice(0, mockWords.list.length, 'cat')

    const user = userEvent.setup()
    render(<Board />)

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })

    for (const letter of ['C', 'A', 'T']) {
      const button = within(keyboard).getByRole('button', {
        name: new RegExp(`select letter ${letter}`, 'i'),
      })
      await user.click(button)
    }

    await waitFor(() => {
      expect(screen.getByText(/congratulations! you won/i, { hidden: true })).toBeInTheDocument()
    })

    await waitFor(() => {
      const buttons = within(keyboard).getAllByRole('button')
      buttons.forEach((button) => {
        expect(button).toBeDisabled()
      })
    })
  })
})
