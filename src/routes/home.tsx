import React from 'react'
import { List } from '../components/List'
import data from '../mock/data.json'
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
  const animes: DataItem[] = data.data.Page.media

  return (<List animes={animes}/>)
}
