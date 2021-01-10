import React, { FunctionComponent } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Index from '../pages/index'

const TestComponent: FunctionComponent = () => {
  return (
    <Index />
  )
}

describe('Index', () => {
  test('The toolbar has the draw tool selected on page load', () => {
    render(<TestComponent />)
    const button = screen.getByRole('button', { pressed: true })
    expect(button).toHaveAttribute('aria-label', 'draw')
  })

  test('Clicking a toggle button changes the selected option', () => {
    render(<TestComponent />)
    const button = screen.getByRole('button', { pressed: true })
    expect(button).toHaveAttribute('aria-label', 'draw')

    fireEvent.click(screen.getByRole('button', { name: 'text' } ))
    const button2 = screen.getByRole('button', { pressed: true })
    expect(button2).toHaveAttribute('aria-label', 'text')
  })
})
