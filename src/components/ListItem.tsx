import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import type { DataItem } from '../routes/home'
interface Props {
  anime: DataItem
}

export const ListItem: React.FC<Props> = ({ anime }) => {
  const navigate = useNavigate()
  return (
    <Card onClick={() => { navigate(`/detail/${anime.id}`) }}>
      <CardMedia image={anime.coverImage.medium } src={'https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png'} />
      <CardContent>
        <Typography>{ anime.title }</Typography>
      </CardContent>
    </Card>
  )
}
