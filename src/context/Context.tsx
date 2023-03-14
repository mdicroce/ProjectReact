import React, { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { DataItem } from '../routes/home'
import { type AnimeDetails } from '../routes/Detail'

interface ContextElements {
  animes: DataItem[] | undefined
  setAnimes: Dispatch<SetStateAction<DataItem[] | undefined>> | undefined
  setAnimeDetail: Dispatch<SetStateAction<AnimeDetails | undefined>> | undefined
  animeDetail: AnimeDetails | undefined
}
export const DataContext = React.createContext<ContextElements>({
  animes: undefined,
  setAnimes: undefined,
  animeDetail: undefined,
  setAnimeDetail: undefined
})

interface Props {
  children: JSX.Element
}

export const DataProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [animes, setAnimes] = useState<DataItem[] | undefined>()
  const [animeDetail, setAnimeDetail] = useState<AnimeDetails | undefined>()

  return (
    <DataContext.Provider value={ {
      animes,
      setAnimes,
      setAnimeDetail,
      animeDetail
    } }>
      {children}
    </DataContext.Provider>
  )
}
