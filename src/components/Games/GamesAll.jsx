import React from 'react'
import { ContextGamesProvider } from '../../Context/ContextGames/ContextGames'
import { Games } from './Games'


export const GamesAll = () => {
  return (
    <ContextGamesProvider>
        <Games/>
        
    </ContextGamesProvider>
  )
}
