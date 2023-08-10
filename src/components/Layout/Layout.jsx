import React from 'react'
import './layout.css'
export const Layout = ({children}) => {
  return (
    <main className='layout'>
       {children}
    </main>
  )
}