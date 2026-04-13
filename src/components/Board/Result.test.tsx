import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Result from './Result'

describe('Result', () => {
  const mockOnFailed = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders result status', () => {
    render(
      <Result
        gameResult={null}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={[]}
        onFailed={mockOnFailed}
      />
    )

    const result = screen.getByRole('status')
    expect(result).toBeInTheDocument()
  })

  it('displays wrong guesses count', () => {
    render(
      <Result
        gameResult={null}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={['X', 'Z']}
        onFailed={mockOnFailed}
      />
    )

    const result = screen.getByRole('status')
    const wrongCount = within(result).getByLabelText(/number of wrong guesses/i)

    expect(wrongCount).toBeInTheDocument()
    expect(wrongCount).toHaveTextContent(/WRONG: 2\/\d+/)
  })

  it('updates wrong count when selected letters change', () => {
    const { rerender } = render(
      <Result
        gameResult={null}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={['X']}
        onFailed={mockOnFailed}
      />
    )

    let result = screen.getByRole('status')
    let wrongCount = within(result).getByLabelText(/number of wrong guesses/i)
    expect(wrongCount).toHaveTextContent(/WRONG: 1\/\d+/)

    rerender(
      <Result
        gameResult={null}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={['X', 'Z', 'Q']}
        onFailed={mockOnFailed}
      />
    )

    result = screen.getByRole('status')
    wrongCount = within(result).getByLabelText(/number of wrong guesses/i)
    expect(wrongCount).toHaveTextContent(/WRONG: 3\/\d+/)
  })

  it('calls onFailed when max wrong guesses reached', () => {
    const wrongLetters = ['X', 'Z', 'Q', 'J', 'K', 'W']
    render(
      <Result
        gameResult={null}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={wrongLetters}
        onFailed={mockOnFailed}
      />
    )

    expect(mockOnFailed).toHaveBeenCalled()
  })

  it('renders result image', () => {
    render(
      <Result
        gameResult={null}
        letters={['H', 'E', 'L', 'L', 'O']}
        selectedLetters={['X']}
        onFailed={mockOnFailed}
      />
    )

    const result = screen.getByRole('status')
    const image = within(result).getByRole('img')

    expect(image).toBeInTheDocument()
  })
})
