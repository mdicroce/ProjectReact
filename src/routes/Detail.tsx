import { Box, Card, CardMedia, Container, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import type { CoverImage } from './home'
import details from '../mock/details.json'

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

export const Detail: React.FC = () => {
  const animeDetail: AnimeDetails = details.data.Media

  return <div>

    <Box sx={{ backgroundColor: 'red' }}>
        <CardMedia component="img" image={ animeDetail?.bannerImage } />
    </Box>
    <Container>
      <Grid2 container>
        <Grid2>
          <Card>
            <CardMedia component="img" image={ animeDetail?.coverImage.large } />
          </Card>
        </Grid2>
        <Grid2>
          <Box>
            <Typography variant="h2" component="h1">
              { animeDetail?.title.userPreferred }
            </Typography>
          </Box>
        </Grid2>
      </Grid2>

    </Container>
  </div>
}
