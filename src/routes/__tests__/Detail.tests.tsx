import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Detail } from '../Detail'
import '@testing-library/jest-dom'

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom')),
  useParams: jest.fn(() => ({ id: '20996' }))
}))
jest.mock('../../api/ApiConection', () => ({
  ...(jest.requireActual('../../api/ApiConection')),
  useApiConection: jest.fn(() => {
    return {

      getAnimeDetail: jest.fn(async () => {}),
      animeDetail: {
        id: 20996,
        idMal: 28977,
        title: {
          romaji: 'Gintama°',
          english: 'Gintama Season 4',
          native: '銀魂°',
          userPreferred: 'Gintama°'
        },
        type: 'ANIME',
        format: 'TV',
        status: 'FINISHED',
        description: "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko?\n\nMeanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team.\n\nFilled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's third season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet.\n\n<br></br>(Source: MAL Rewrite)",
        startDate: {
          year: 2015,
          month: 4,
          day: 8
        },
        endDate: {
          year: 2016,
          month: 3,
          day: 30
        },
        season: 'SPRING',
        seasonYear: 2015,
        seasonInt: 152,
        episodes: 51,
        duration: 24,
        chapters: null,
        volumes: null,
        countryOfOrigin: 'JP',
        isLicensed: true,
        source: 'MANGA',
        hashtag: '#gintama',
        trailer: null,
        coverImage: {
          extraLarge: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20996-kBEGEGdeK1r7.jpg',
          large: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx20996-kBEGEGdeK1r7.jpg',
          medium: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx20996-kBEGEGdeK1r7.jpg',
          color: '#e45d86'
        },
        bannerImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20996-gaNJKtjmy3Pf.jpg',
        genres: [
          'Action',
          'Comedy',
          'Drama',
          'Sci-Fi'
        ],
        averageScore: 90,
        meanScore: 91,
        popularity: 82262
      }
    }
  })

}))

describe('test for Detail', () => {
  it('renders detail correctly', () => {
    render(
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    )
    expect(screen.getAllByRole('img')).toBeTruthy()
    expect(screen.getByText('Gintama°')).toBeTruthy()
  })
  it('renders a banner image', () => {
    render(
      <BrowserRouter>
        <Detail />
      </BrowserRouter>
    )
    expect(screen.getAllByRole('img').filter(a => { return a.getAttribute('src') === 'https://s4.anilist.co/file/anilistcdn/media/anime/banner/20996-gaNJKtjmy3Pf.jpg' })).toBeTruthy()
  })
})
