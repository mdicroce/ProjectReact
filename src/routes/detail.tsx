import React from 'react'
import type { CoverImage } from './home'

interface StartEndDate {
  year: number
  month: number
  day: number
}
interface Title {
  romaji: string
  english: string
  native: string
  userPreferred: string
}

interface AnimeDetails {
  Title: Title
  type: string
  status: string
  description: string
  startDate: StartEndDate
  endDate: StartEndDate
  season: string
  seasonYear: number
  episodes: number
  duration: number
  countryOfOrigin: string
  source: string
  coverImage: CoverImage
  bannerImage: string
  genres: [string]
  averageScore: number
}

interface Props {
  anime: AnimeDetails
}

export const Detail: React.FC<Props> = ({ anime }) => {
  return <div>detail</div>
}
