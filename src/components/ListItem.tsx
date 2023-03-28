import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import type { DataItem } from '../routes/home'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
interface Props {
  anime: DataItem
}

export const ListItem: React.FC<Props> = ({ anime }) => {
  const navigate = useNavigate()
  return (
    <Grid2 lg={ 3 } md={4} sm={6} xs={6}>

    <Card onClick={ () => {
      navigate(`/detail/${anime.id}`)
    } }>
        <CardMedia component="img" image={ anime.coverImage.extraLarge } alt={`Cover image for ${anime.title.userPreferred !== undefined ? anime.title.userPreferred : ''}`} />
        <CardContent className="pepito" >
            <Typography>{ anime.title.userPreferred }</Typography>
          </CardContent>
    </Card>
  </Grid2>
  )
}
