import { Box, ListItem, ListItemText } from '@mui/material'
import React from 'react'

interface Props {
  label: string
  text?: string | number
}

export const DescriptionItem: React.FC<Props> = ({ label, text }) => {
  const secondaryTypographyProps = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
    color: 'black'
  }
  const primaryTypographyProps = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
    color: 'rgba(0, 0, 0, 0.6)'

  }
  return (
    <ListItem disablePadding><Box>
      <ListItemText secondary={ text } primary={ label } primaryTypographyProps={ primaryTypographyProps } secondaryTypographyProps={ secondaryTypographyProps} />
      </Box></ListItem>
  )
}
