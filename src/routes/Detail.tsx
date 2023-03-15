import { Box, Card, CardMedia, Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React, { useEffect, useState } from 'react'
import type { CoverImage } from './home'
import { useApiConection } from '../api/ApiConection'
import { Loading } from '../components/Loading'

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
  const { getAnimeDetail, animeDetail } = useApiConection()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (id !== undefined) {
      setLoading(true)
      getAnimeDetail(id)
        .catch(e => { console.log(e) })
    }
  }, [])
  useEffect(() => {
    if (animeDetail !== undefined) { setLoading(false) }
  }, [animeDetail])
  if (loading) {
    return <Loading/>
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
              <DescriptionItem label="Episode Duration" text={ `${animeDetail?.duration} mins` } />
              <DescriptionItem label="Status" text={ animeDetail?.status } />
              <DescriptionItem label="Season" text={ animeDetail?.season } />
              <DescriptionItem label="Start Date" text={ getDate(animeDetail?.startDate) } />
              <DescriptionItem label="End Date" text={ getDate(animeDetail?.endDate) } />
              <DescriptionItem label="averageScore" text={ `${animeDetail?.averageScore}` } />
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
