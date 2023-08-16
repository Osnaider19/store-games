import React from 'react'
import { ContextLastDaysProvider } from '../../Context/contextLastDays/ContextLastDays'
import { Last30Days } from './Last30Days'

export const Last30DaysPage = () => {
  return (
    <ContextLastDaysProvider>
        <Last30Days/>
    </ContextLastDaysProvider>
  )
}
