import { Chip } from '@mui/material'
import React from 'react'

interface Props {
  genres: string[] | undefined
}

export const ListOfGenres: React.FC<Props> = ({ genres }) => {
  return (
    <div>
      { genres?.map((gen: string, index: number) => {
        return (<Chip key={index} label={gen} color="primary" />)
      })}
    </div>
  )
}
