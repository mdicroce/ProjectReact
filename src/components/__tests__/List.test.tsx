import React from 'react'
import { render } from '@testing-library/react'
import { List } from '../List'
import { type DataItem } from '../../routes/home'
import { BrowserRouter } from 'react-router-dom'

describe('List', () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const mockedUsedNavigate = jest.fn()

  jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom')),
    useNavigate: () => mockedUsedNavigate
  }))
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

  it('should render a list of items correctly', () => {
    const { getAllByRole, getAllByText } = render(
      <BrowserRouter>
        <List animes={ data } />
      </BrowserRouter>
    )
    expect(getAllByRole('img')).toHaveLength(data.length)
    expect(getAllByText('Title', { exact: false })).toHaveLength(data.length)
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
