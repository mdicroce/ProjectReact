import { type AnimeDetails } from '../../../routes/Detail'
import { type DataItem } from '../../../routes/home'
import { setAnimes, startLoading, setAnimeDetail } from './AnimeSlice'

export const getAnimes = (page = 1) => {
  return async (dispatch: (arg0: { payload: DataItem[] | undefined, type: 'anime/startLoading' | 'anime/setAnimes' }) => void, getState: any) => {
    dispatch(startLoading())
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
      page,
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

    const resp = await fetch(url, options)
    const data = await resp.json()

    dispatch(setAnimes(data.data.Page.media))
  }
}

export const getAnimeDetail = (id: number | string | undefined): (dispatch: (arg0: {
  payload: AnimeDetails | undefined
  type: 'anime/startLoading' | 'anime/setAnimeDetail'
}) => void) => Promise<void> => {
  const url = 'https://graphql.anilist.co'
  return async (dispatch: (arg0: { payload: AnimeDetails | undefined, type: 'anime/startLoading' | 'anime/setAnimeDetail' }) => void) => {
    dispatch(startLoading())
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
      {"id": ${id !== undefined ? id : ''}}
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
    const resp = await fetch(url, optionsDetail)
    const data = await resp.json()

    dispatch(setAnimeDetail(data.data.Media))
  }
}
