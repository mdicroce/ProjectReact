import React from 'react'
import { type DataItem } from '../routes/home'
import { ListItem } from './ListItem'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Container } from '@mui/system'

interface Props {
  animes: DataItem[]
}

export const List: React.FC<Props> = ({ animes }) => {
  return <Container>
    <Grid2 container spacing={ 2 }>
      { animes.map((actual: DataItem): JSX.Element => {
        return <ListItem anime={ actual } key={ actual.id } />
      })}
      </Grid2>
    </Container>
}
