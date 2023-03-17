import { Box, Card, CardMedia, Container, Stack, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useEffect } from 'react'
import type { CoverImage } from './home'
import { ListOfGenres } from '../components/ListOfGenres'
import { DescriptionItem } from '../components/DescriptionItem'
import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { getAnimeDetail } from '../store/slices/Anime/Thunks'
import { useParams } from 'react-router-dom'

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
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const animeDetail: AnimeDetails | undefined = useAppSelector((state) => state.anime.animeDetail)
  const isLoading: boolean | undefined = useAppSelector((state) => state.anime.loading)

  useEffect(() => {
    dispatch(getAnimeDetail(id))
      .catch(e => { console.log(e) })
  }, [])
  const getDate = (date: { year: number, month: number, day: number }): string => {
    const newDate = new Date(`${date.year}/${date.month}/${date.day}`)
    return newDate.toDateString()
  }

  if (isLoading) {
    return <div>Loading</div>
  }
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
          <Card>
            <Stack >
              <DescriptionItem label="Format" text={ animeDetail?.format } />
              <DescriptionItem label="Episodes" text={ animeDetail?.episodes } />
              <DescriptionItem label="Episode Duration" text={ `${animeDetail?.duration !== undefined ? animeDetail.duration : ''} mins` } />
              <DescriptionItem label="Status" text={ animeDetail?.status } />
              <DescriptionItem label="Season" text={ animeDetail?.season } />
              <DescriptionItem label="Start Date" text={ animeDetail?.startDate !== undefined ? getDate(animeDetail?.startDate) : '' } />
              <DescriptionItem label="End Date" text={ animeDetail?.endDate !== undefined ? getDate(animeDetail?.endDate) : '' } />
              <DescriptionItem label="averageScore" text={ `${animeDetail?.averageScore !== undefined ? animeDetail?.averageScore : ''}` } />
              <DescriptionItem label="Source" text={ animeDetail?.source } />
              <DescriptionItem label="Country of Origin" text={ animeDetail?.countryOfOrigin } />
            </Stack>
          </Card>
        </Grid2>
        <Grid2>
          <Box>
            <Typography variant="h2" component="h1">
              { animeDetail?.title.userPreferred }
            </Typography>
            <Typography variant='body2' component="p">
              { animeDetail?.title.english }
            </Typography>
            <Typography variant='body2' component="p">
              { animeDetail?.title.native }
            </Typography>
          </Box>
          <Box>
            <Container>
              <Box>
                <ListOfGenres genres={ animeDetail?.genres } />
              </Box>
              <Box>
                <Typography variant="body1" component="p">
                  { animeDetail?.description }
                </Typography>
              </Box>

            </Container>
          </Box>
        </Grid2>
      </Grid2>

    </Container>
  </div>
}
