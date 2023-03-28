import { Box, Typography } from '@mui/material'
import React from 'react'

interface Props {
  label: string
  text: string | number
}

export const DescriptionItem: React.FC<Props> = ({ label, text }) => {
  return (
    <><Box>

      <Typography variant="h6">
        {label}
      </Typography>
      <Typography variant="subtitle1">
        { text }
      </Typography>
    </Box><Box>
        <Typography></Typography>
      </Box></>
  )
}
