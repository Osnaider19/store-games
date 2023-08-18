import React from 'react'
import { ContextTagsProvider } from '../../Context/ContextTags/ContextTags'
import { Tags } from './Tags'

export const TagsPage = () => {
  return (
    <ContextTagsProvider>
        <Tags/>
    </ContextTagsProvider>
  )
}
