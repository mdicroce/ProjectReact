import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { type DataItem } from '../../routes/home'
import { List } from '../List'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => mockedUsedNavigate
}))

describe('test for List', () => {
  const data: DataItem[] = [
    {
      title: { userPreferred: 'Title 1' },
      id: 1,
      coverImage: { extraLarge: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20996-kBEGEGdeK1r7.jpg' }
    },
    {
      title: { userPreferred: 'Title 2' },
      id: 2,
      coverImage: { extraLarge: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124194-pWfBqp3GgjOx.jpg' }
    }
  ]
  it('List renders correctly', () => {
    render(
      <BrowserRouter>
        <List animes={ data } />
      </BrowserRouter>
    )
    expect(screen.getAllByRole('img')).toHaveLength(data.length)
    expect(screen.getAllByText('Title', { exact: false })).toHaveLength(data.length)
  })

  it('should render the correct data for each item', () => {
    const { getByText } = render(
      <BrowserRouter>
        <List animes={ data } />
      </BrowserRouter>
    )

    data.forEach((item: DataItem) => {
      const { title } = item

      expect(getByText(title.userPreferred !== undefined ? title.userPreferred : '')).toBeTruthy()
    })
  })
})
