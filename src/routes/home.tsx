import React from 'react'

export interface CoverImage {
  extraLarge: string
  large: string
  medium: string
  color: string
}

export interface DataItem {
  title: string
  id: number
  coverImage: CoverImage
}
export interface Props {
  anime: [DataItem]
}

export const Home: React.FC<Props> = ({ anime }) => {
  return <div>Home</div>
}
