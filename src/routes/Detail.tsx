import { Box, Card, CardMedia, Container, Fab, List, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react'
import type { CoverImage } from './home'
import details from '../mock/details.json'
import { ListOfGenres } from '../components/ListOfGenres'
import { DescriptionItem } from '../components/DescriptionItem'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { useNavigate } from 'react-router-dom'
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
  format: string
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
  const navigate = useNavigate()
  const animeDetail: AnimeDetails = details.data.Media
  const getDate = (date: { year: number, month: number, day: number }): string => {
    const newDate = new Date(`${date.year}/${date.month}/${date.day}`)
    return newDate.toDateString()
  }

  return <div>

    <Box sx={ { zIndex: '-1' } }>
      <Fab onClick={() => { navigate('/') }} sx={{ position: 'fixed', margin: '1rem', opacity: '0.5' }} color="secondary">
        <ArrowBackIosIcon />
      </Fab>
        <CardMedia component="img" image={ animeDetail?.bannerImage } />
    </Box>
    <Container sx={{ marginTop: '-10%', backgroundColor: 'rgba(133,100,100, 0.3)' }}>
      <Grid2 container spacing={2} className='detailContainer'>
        <Grid2 lg={ 3 } md={4} sm={5} xs={8} >
          <Card>
            <CardMedia component="img" image={ animeDetail?.coverImage.large } />
          </Card>
          <Card >
            <List sx={{ padding: '1rem' }}>
              <DescriptionItem label="Format" text={ animeDetail?.format } />
              <DescriptionItem label="Episodes" text={ animeDetail?.episodes } />
              <DescriptionItem label="Episode Duration" text={ `${animeDetail?.duration} mins` } />
              <DescriptionItem label="Status" text={ animeDetail?.status } />
              <DescriptionItem label="Season" text={ animeDetail?.season } />
              <DescriptionItem label="Start Date" text={ getDate(animeDetail?.startDate) } />
              <DescriptionItem label="End Date" text={ getDate(animeDetail?.endDate) } />
              <DescriptionItem label="averageScore" text={ `${animeDetail?.averageScore}` } />
              <DescriptionItem label="Source" text={ animeDetail?.source } />
              <DescriptionItem label="Country of Origin" text={ animeDetail?.countryOfOrigin } />
            </List>
          </Card>
        </Grid2>
        <Grid2 lg={ 9 } md={ 8 } sm={ 7 } xs={ 10 }>
          <Card sx={ { backgroundColor: 'rgba(255,255,255, 0.7)' } }>

          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h2" component="h1">
              { animeDetail?.title.userPreferred }
            </Typography>
            <Typography variant='subtitle1' component="p">
              { animeDetail?.title.english }
            </Typography>
            <Typography variant='caption' component="p">
              { animeDetail?.title.native }
            </Typography>
          </Box>
          <Box>
            <Container>
              <Box>
                <ListOfGenres genres={ animeDetail?.genres } />
              </Box>
              <Box>
                <Typography variant="body1" component="p" sx={{ textAlign: 'center' }}>
                  { animeDetail?.description }
                </Typography>
              </Box>

            </Container>
          </Box>
          </Card>
        </Grid2>
      </Grid2>

    </Container>
  </div>
}
