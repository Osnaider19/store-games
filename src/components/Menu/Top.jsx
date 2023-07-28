import React from 'react'
import { ItemMenu } from './ItemMenu'
import {BiBarChartAlt2} from 'react-icons/bi'
function Top() {
  return (
    <div>
        <span className='block text-xl font-bold py-2 px-1'>Mejores</span>
        <ItemMenu icon={<BiBarChartAlt2/>} link={`#`} name={"Este Año"}/>
    </div>
  )
}

export default Top