import React, { useEffect, useState } from 'react'
import { List } from '../components/List'
import { useApiConection } from '../api/ApiConection'
import { Loading } from '../components/Loading'

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
  const { getAnimeList, animes } = useApiConection()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    console.log(useApiConection())
    getAnimeList()
      .catch((e) => { console.log(e) })
  }, [])
  useEffect(() => {
    console.log(animes)
    if (animes !== undefined && animes?.length > 0) { setLoading(false) }
  }, [animes])

  if (loading) { return <Loading/> }
  return (<List animes={animes}/>)
}
