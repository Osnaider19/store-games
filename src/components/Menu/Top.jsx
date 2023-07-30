import React from 'react'
import { ItemMenu } from './ItemMenu'
import {BiBarChartAlt2} from 'react-icons/bi'
function Top() {
  return (
    <div>
        <span className='block text-xl font-bold py-2 px-1'>Top</span>
        <ItemMenu icon={<BiBarChartAlt2/>} link={`#`} name={"Popular in 2022"}/>
        <ItemMenu icon={<BiBarChartAlt2/>} link={`#`} name={"Best of the years"}/>
        <ItemMenu icon={<BiBarChartAlt2/>} link={`#`} name={"All tim top 250"}/>

    </div>
  )
}

export default Top