import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Keyboard from './Keyboard'

describe('Keyboard', () => {
  const mockHandleKeyClick = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all letter buttons', () => {
    render(
      <Keyboard
        handleKeyClick={mockHandleKeyClick}
        selectedLetters={[]}
        disabled={false}
      />
    )

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttons = within(keyboard).getAllByRole('button')

    expect(buttons).toHaveLength(26)
  })

  it('disables selected buttons', () => {
    render(
      <Keyboard
        handleKeyClick={mockHandleKeyClick}
        selectedLetters={['A', 'B']}
        disabled={false}
      />
    )

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttonA = within(keyboard).getByRole('button', {
      name: /select letter a/i,
    })
    const buttonB = within(keyboard).getByRole('button', {
      name: /select letter b/i,
    })
    const buttonC = within(keyboard).getByRole('button', {
      name: /select letter c/i,
    })

    expect(buttonA).toBeDisabled()
    expect(buttonB).toBeDisabled()
    expect(buttonC).not.toBeDisabled()
  })

  it('disables all buttons when keyboard is disabled', () => {
    render(
      <Keyboard
        handleKeyClick={mockHandleKeyClick}
        selectedLetters={[]}
        disabled={true}
      />
    )

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttons = within(keyboard).getAllByRole('button')

    buttons.forEach(button => {
      expect(button).toBeDisabled()
    })
  })

  it('calls handleKeyClick when button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <Keyboard
        handleKeyClick={mockHandleKeyClick}
        selectedLetters={[]}
        disabled={false}
      />
    )

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttonA = within(keyboard).getByRole('button', {
      name: /select letter a/i,
    })

    await user.click(buttonA)

    expect(mockHandleKeyClick).toHaveBeenCalledWith('A')
  })

  it('calls handleKeyClick when Enter key is pressed', async () => {
    const user = userEvent.setup()
    render(
      <Keyboard
        handleKeyClick={mockHandleKeyClick}
        selectedLetters={[]}
        disabled={false}
      />
    )

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttonA = within(keyboard).getByRole('button', {
      name: /select letter a/i,
    })

    buttonA.focus()
    await user.keyboard('{Enter}')

    expect(mockHandleKeyClick).toHaveBeenCalledWith('A')
  })

  it('calls handleKeyClick when Space key is pressed', async () => {
    const user = userEvent.setup()
    render(
      <Keyboard
        handleKeyClick={mockHandleKeyClick}
        selectedLetters={[]}
        disabled={false}
      />
    )

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttonB = within(keyboard).getByRole('button', {
      name: /select letter b/i,
    })

    buttonB.focus()
    await user.keyboard(' ')

    expect(mockHandleKeyClick).toHaveBeenCalledWith('B')
  })

  it('does not call handleKeyClick when button is disabled', async () => {
    const user = userEvent.setup()
    render(
      <Keyboard
        handleKeyClick={mockHandleKeyClick}
        selectedLetters={['A']}
        disabled={false}
      />
    )

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttonA = within(keyboard).getByRole('button', {
      name: /select letter a/i,
    })

    await user.click(buttonA)

    expect(mockHandleKeyClick).not.toHaveBeenCalled()
  })

  it('does not call handleKeyClick when keyboard is disabled', async () => {
    const user = userEvent.setup()
    render(
      <Keyboard
        handleKeyClick={mockHandleKeyClick}
        selectedLetters={[]}
        disabled={true}
      />
    )

    const keyboard = screen.getByRole('group', { name: /letter keyboard/i })
    const buttonA = within(keyboard).getByRole('button', {
      name: /select letter a/i,
    })

    await user.click(buttonA)

    expect(mockHandleKeyClick).not.toHaveBeenCalled()
  })
})
