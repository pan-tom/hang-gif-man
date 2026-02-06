import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RestartButton from './RestartButton'

describe('RestartButton', () => {
  const mockOnClick = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders restart button', () => {
    render(<RestartButton onClick={mockOnClick} disabled={false} />)

    const button = screen.getByRole('button', { name: /restart game/i })
    expect(button).toBeInTheDocument()
  })

  it('enables button when disabled prop is false', () => {
    render(<RestartButton onClick={mockOnClick} disabled={false} />)

    const button = screen.getByRole('button', { name: /restart game/i })
    expect(button).not.toBeDisabled()
  })

  it('disables button when disabled prop is true', () => {
    render(<RestartButton onClick={mockOnClick} disabled={true} />)

    const button = screen.getByRole('button', { name: /restart game/i })
    expect(button).toBeDisabled()
  })

  it('calls onClick when clicked and enabled', async () => {
    const user = userEvent.setup()
    render(<RestartButton onClick={mockOnClick} disabled={false} />)

    const button = screen.getByRole('button', { name: /restart game/i })
    await user.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', async () => {
    const user = userEvent.setup()
    render(<RestartButton onClick={mockOnClick} disabled={true} />)

    const button = screen.getByRole('button', { name: /restart game/i })
    await user.click(button)

    expect(mockOnClick).not.toHaveBeenCalled()
  })

  it('makes button focusable when enabled', () => {
    render(<RestartButton onClick={mockOnClick} disabled={false} />)

    const button = screen.getByRole('button', { name: /restart game/i })
    button.focus()

    expect(button).toHaveFocus()
  })
})
