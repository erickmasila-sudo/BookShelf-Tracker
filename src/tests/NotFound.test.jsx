import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound'

test('renders 404', () => {
  render(<MemoryRouter><NotFound /></MemoryRouter>)
  expect(screen.getByText('404')).toBeInTheDocument()
})

test('renders Go back Home link', () => {
  render(<MemoryRouter><NotFound /></MemoryRouter>)
  expect(screen.getByText('Go Back Home')).toBeInTheDocument()
})

test('renders not found message', () => {
  render(<MemoryRouter><NotFound /></MemoryRouter>)
  expect(screen.getByText('The page you are looking for does not exist.')).toBeInTheDocument()
})