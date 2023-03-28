import { render, screen } from '@testing-library/react'
import React from 'react'
import { DescriptionItem } from '../DescriptionItem'

describe('test for description item', () => {
  it('renders descriptionItem correctly', () => {
    render(<DescriptionItem label="label" text="text"/>)
  })
  expect(screen.getByText('label')).toBeInTheDocument()
  expect(screen.getByText('text')).toBeInTheDocument()
})
