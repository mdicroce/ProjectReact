import React from 'react'
import { render, screen } from '@testing-library/react'
import { ListOfGenres } from '../ListOfGenres'
import '@testing-library/jest-dom'

describe('tests for listOfGenres', () => {
  const genres = [
    'Action',
    'Comedy',
    'Drama',
    'Sci-Fi'
  ]
  it('renders a list of elements', () => {
    render(<ListOfGenres genres={ genres } />)

    expect(screen.getByRole('list')).toBeInTheDocument()
  })
  it('renders a list of genres', () => {
    render(<ListOfGenres genres={ genres } />)
    genres.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument()
    })
  })
})
