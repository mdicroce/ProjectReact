import React from 'react'
import { render } from '@testing-library/react'
import { DescriptionItem } from '../DescriptionItem'
import '@testing-library/jest-dom'

describe('DescriptionItem component', () => {
  test('renders the label and text correctly', () => {
    const label = 'Name'
    const text = 'John Doe'
    const { getByText } = render(<DescriptionItem label={label} text={text} />)
    expect(getByText(label)).toBeInTheDocument()
    expect(getByText(text)).toBeInTheDocument()
  })

  test('renders only the label if no text is passed', () => {
    const label = 'Name'
    const { getByText, queryByText } = render(<DescriptionItem label={label} />)
    expect(getByText(label)).toBeInTheDocument()
    expect(queryByText('undefined')).not.toBeInTheDocument()
  })
})
