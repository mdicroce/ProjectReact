import React from 'react'
import { List } from '../components/List'

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
export interface Props {
  anime: DataItem[]
}

export const Home: React.FC<Props> = ({ anime }) => {
  return <List animes={anime}/>
}
