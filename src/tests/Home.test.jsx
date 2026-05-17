import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../pages/Home'

test('renders ReadShelf heading', () => {
  render(<MemoryRouter><Home /></MemoryRouter>)
  expect(screen.getByText('ReadShelf')).toBeInTheDocument()
})

test('renders Get Started button', () => {
  render(<MemoryRouter><Home /></MemoryRouter>)
  expect(screen.getByText('Get Started')).toBeInTheDocument()
})

test('renders tagline', () => {
  render(<MemoryRouter><Home /></MemoryRouter>)
  expect(screen.getByText('Track what you read, share your shelf.')).toBeInTheDocument()
})