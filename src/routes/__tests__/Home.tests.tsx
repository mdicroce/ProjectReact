import { render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '../home'
import '@testing-library/jest-dom'

const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useNavigate: () => mockedUsedNavigate
}))
jest.mock('../../api/ApiConection', () => ({
  ...(jest.requireActual('../../api/ApiConection')),
  useApiConection: jest.fn(() => {
    return {

      getAnimeList: jest.fn(async () => {}),
      animes: [{
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
      },
      {
        title: {
          romaji: 'Fruits Basket: The Final',
          english: 'Fruits Basket The Final Season',
          native: 'フルーツバスケットThe Final',
          userPreferred: 'Fruits Basket: The Final'
        },
        id: 124194,
        coverImage: {
          extraLarge: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx124194-pWfBqp3GgjOx.jpg',
          large: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124194-pWfBqp3GgjOx.jpg',
          medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx124194-pWfBqp3GgjOx.jpg',
          color: '#28aee4'
        }
      }]
    }
  })

}))

describe('test for home', () => {
  it('test if home is rendered', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    expect(screen.getByText('Gintama°', { exact: false })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
})
