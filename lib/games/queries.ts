'use client'

import { fetcher } from '@/lib/utils'
import { AxiosError } from 'axios'
import useSWR from 'swr'
import { Game } from './types'

export function useGame(id?: string) {
  const { data, error } = useSWR<Game, AxiosError>(id && `/api/games/${id}`, fetcher)
  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export function useGames() {
  const { data, error } = useSWR<Game[], AxiosError>(`/api/games`, fetcher)
  return {
    data: data ?? ([] as Game[]),
    isLoading: !data && !error,
    isError: error,
  }
}
