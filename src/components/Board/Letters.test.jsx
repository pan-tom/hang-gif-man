import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Letters from './Letters'
import { GAME_RESULT } from '../../constants'

describe('Letters', () => {
  const mockOnSucceed = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders word letters', () => {
    render(
      <Letters
        gameResult={null}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={[]}
        onSucceed={mockOnSucceed}
      />
    )

    const lettersGroup = screen.getByRole('group', { name: /word to guess/i })
    expect(lettersGroup).toBeInTheDocument()
  })

  it('shows hidden letters initially', () => {
    render(
      <Letters
        gameResult={null}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={[]}
        onSucceed={mockOnSucceed}
      />
    )

    const lettersGroup = screen.getByRole('group', { name: /word to guess/i })
    const hiddenLetters =
      within(lettersGroup).getAllByLabelText('Hidden letter')

    expect(hiddenLetters.length).toBe(5)
  })

  it('reveals letters when selected', () => {
    render(
      <Letters
        gameResult={null}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={['H', 'E']}
        onSucceed={mockOnSucceed}
      />
    )

    const lettersGroup = screen.getByRole('group', { name: /word to guess/i })
    const letterH = within(lettersGroup).getByLabelText('Letter H')
    const letterE = within(lettersGroup).getByLabelText('Letter E')

    expect(letterH).toBeInTheDocument()
    expect(letterE).toBeInTheDocument()
  })

  it('calls onSucceed when all letters are selected', () => {
    render(
      <Letters
        gameResult={null}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={['H', 'E', 'L', 'O']}
        onSucceed={mockOnSucceed}
      />
    )

    expect(mockOnSucceed).toHaveBeenCalled()
  })

  it('reveals all letters when game fails', () => {
    render(
      <Letters
        gameResult={GAME_RESULT.FAILED}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={['H']}
        onSucceed={mockOnSucceed}
      />
    )

    const lettersGroup = screen.getByRole('group', { name: /word to guess/i })
    const allLetters = within(lettersGroup).getAllByLabelText(/^Letter/i)

    expect(allLetters.length).toBe(5)
  })
})
