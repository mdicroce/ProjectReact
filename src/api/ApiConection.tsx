import { useContext } from 'react'
import type { DataItem } from '../routes/home'
import type { AnimeDetails } from '../routes/Detail'
import { DataContext } from '../context/Context'
const url = 'https://graphql.anilist.co'

export const useApiConection = (): {
  animes: DataItem[] | undefined
  animeDetail: AnimeDetails | undefined
  getAnimeList: () => Promise<any>
  getAnimeDetail: (selectedAnime: number | string) => Promise<any>
} => {
  const { animes, setAnimes, setAnimeDetail, animeDetail } = useContext(DataContext)
  const getAnimeList = async (): Promise<any> => {
    if (animes === undefined || animes.length > 0) {
      const query = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media (id: $id, search: $search) {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
            coverImage {
              extraLarge
              large
              medium
              color
            }
          }
        }
      }`

      const variables =
    {
      sort: ['POPULARITY_DESC']
    }

      const url = 'https://graphql.anilist.co'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          query,
          variables
        })
      }
      await fetch(url, options)
        .then(async (response) => await response.json())
        .then(data => {
          console.log(data)
          return data
        })
        .then(data => setAnimes?.(data.data.Page.media))
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          console.log(animes)
        })
    }
  }

  const getAnimeDetail = async (selectedAnime: number | string): Promise<any> => {
    const query = `
      query ($id: Int) {
        Media (id: $id) {
          id
          title {
            romaji
            english
            native
            userPreferred
          }
          type
          status
          description
          startDate {
            year
            month
            day
          }
          endDate {
            year
            month
            day
          }
          season
          seasonYear
          episodes
          duration
          countryOfOrigin
          source
          coverImage {
            extraLarge
            large
            medium
            color
          }
          bannerImage
          genres
          averageScore
        }
      }
    `

    const variables = `
      {"id": ${selectedAnime}}
    `
    const optionsDetail = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      })
    }
    await fetch(url, optionsDetail)
      .then(async (response) => await response.json())
      .then(data => setAnimeDetail?.(data.data.Media))
      .catch((e) => {
        console.log(e)
      })
  }
  return {
    getAnimeList,
    getAnimeDetail,
    animes,
    animeDetail
  }
}
