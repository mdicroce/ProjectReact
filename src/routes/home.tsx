import React, { useEffect } from 'react'
import { List } from '../components/List'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { getAnimes } from '../store/slices/Anime/Thunks'
// import { DataContext } from '../context/Context'

export interface CoverImage {
  extraLarge?: string
  large?: string
  medium?: string
  color?: string | null
}
export interface Title {
  romaji?: string
  english?: string
  native?: string
  userPreferred?: string
}

export interface DataItem {
  title: Title
  id: number
  coverImage: CoverImage
}

export const Home: React.FC = () => {
  const dispatch = useAppDispatch()
  const animes: DataItem[] | undefined = useAppSelector((state) => state.anime.animes)
  const isLoading: boolean | undefined = useAppSelector((state) => state.anime.loading)

  useEffect(() => {
    dispatch(getAnimes())
      .catch(e => { console.log(e) })
  }, [])

  if (isLoading) {
    return <div>Loading</div>
  }
  return (<List animes={animes}/>)
}
