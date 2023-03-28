import React from 'react'
import { ListItem } from '../ListItem'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { type DataItem } from '../../routes/home'
import '@testing-library/jest-dom'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => mockedUsedNavigate
}))
describe('tests for ListItem', () => {
  const data: DataItem = {
    title: {
      romaji: 'Gintama°',
      english: 'Gintama Season 4',
      native: '銀魂°',
      userPreferred: 'Gintama°'
    },
    id: 20996,
    coverImage: {
      extraLarge: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20996-kBEGEGdeK1r7.jpg',
      large: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20996-kBEGEGdeK1r7.jpg',
      medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20996-kBEGEGdeK1r7.jpg',
      color: '#e45d86'
    }
  }
  it('renders correctly', async () => {
    render(<BrowserRouter>
      <ListItem anime={ data } />
    </BrowserRouter>)

    expect(
      screen.getByText(data.title.userPreferred as string)
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img').getAttribute('src')
    ).toBe(data.coverImage.extraLarge)
  })
  it('navigate to other component when clicks on card component', async () => {
    render(
      <BrowserRouter>
        <ListItem anime={ data } />
      </BrowserRouter>
    )

    expect(
      screen.getByText(data.title.userPreferred as string).parentElement
    ).toBeInTheDocument()

    fireEvent.click(screen.getByText(data.title.userPreferred as string).parentElement as HTMLElement)
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/detail/${data.id}`)
  })
})
