import { render, screen } from '@testing-library/react'
import Books from '../components/Books'

const mockBook = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  cover: null,
  shelf: "Want to Read"
}

test('renders book title', () => {
  render(<Books book={mockBook} onMove={() => {}} onRemove={() => {}} />)
  expect(screen.getByText('The Great Gatsby')).toBeInTheDocument()
})

test('renders book author', () => {
  render(<Books book={mockBook} onMove={() => {}} onRemove={() => {}} />)
  expect(screen.getByText('F. Scott Fitzgerald')).toBeInTheDocument()
})

test('renders No Cover when no cover image', () => {
  render(<Books book={mockBook} onMove={() => {}} onRemove={() => {}} />)
  expect(screen.getByText('No Cover')).toBeInTheDocument()
})

test('renders move button for next shelf', () => {
  render(<Books book={mockBook} onMove={() => {}} onRemove={() => {}} />)
  expect(screen.getByText('Reading')).toBeInTheDocument()
})