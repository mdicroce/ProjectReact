/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import { useApiConection } from '../ApiConection'
import { renderHook } from '@testing-library/react'
import { DataProvider } from '../../context/Context'
import { act } from 'react-dom/test-utils'

/* eslint-disable no-undef */

describe(('Tests for ApiConection'), () => {
  test('Renders the useApiConextion hook', () => {
    const { result } = renderHook(() => useApiConection())
    console.log(result)
    expect(result).not.toBeFalsy()
  })
  test(('getAnimeList fills the "animes" variable with anime data.'), async () => {
    // eslint-disable-next-line react/react-in-jsx-scope
    const wrapper = ({ children }) => {
      return (
        <DataProvider>
          { children }
        </DataProvider>
      )
    }

    const { result } = renderHook(() => useApiConection(), { wrapper })
    await act(async () => { await result.current.getAnimeList() })
    expect(result.current.animes).toBeDefined()
    expect(result.current.animes).toHaveLength(50)
  })
  test(('getAnimeDetail fill the "animeDetail" variable with the detail of an anime when it receive an id'), async () => {
    const wrapper = ({ children }) => {
      return (
        <DataProvider>
          { children }
        </DataProvider>
      )
    }
    const { result } = renderHook(() => useApiConection(), { wrapper })
    await act(async () => { await result.current.getAnimeDetail(1) })
    expect(result.current.animeDetail).toBeDefined()
    expect(result.current.animeDetail).toHaveProperty('id', 1)
    expect(result.current.animeDetail).toHaveProperty('title')
  })
})
