import React from 'react'
import { Slider } from '../Slider/Slider'
import { SliderGames } from '../SliderGames/SliderGames'
import { Genres } from './Genres'

export const Home = () => {
  return (
    <div>
        <Slider/>
        <SliderGames/>
        <Genres/>
    </div>
  )
}
