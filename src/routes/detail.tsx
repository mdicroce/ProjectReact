import { Box, Card, CardMedia } from '@mui/material'
import React from 'react'
import type { CoverImage } from './home'

export interface StartEndDate {
  year: number
  month: number
  day: number
}
export interface Title {
  romaji: string
  english: string
  native: string
  userPreferred: string
}

export interface AnimeDetails {
  id: number
  title: Title
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
  genres: string[]
  averageScore: number
}

interface Props {
  anime: AnimeDetails
}

export const Detail: React.FC<Props> = ({ anime }) => {
  console.log(anime)
  return <div>

    <Box sx={{ backgroundColor: 'red' }}>
      <Card>
        <CardMedia component="img" image={ anime.bannerImage } />
        <Card>
          
        </Card>
      </Card>
    </Box>
  </div>
}
