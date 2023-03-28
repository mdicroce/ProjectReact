import { Chip } from '@mui/material'
import React from 'react'

interface Props {
  genres: string[] | undefined
}

export const ListOfGenres: React.FC<Props> = ({ genres }) => {
  return (
    <ul>
      { genres?.map((gen: string, index: number) => {
        return (
          <li key={index}>
            <Chip label={ gen } color="primary" />
          </li>
        )
      })}
    </ul>
  )
}
