import React from 'react'

export const Developers = ({developers}) => {
  return (
    <div>
      {developers.map((developer)=>(
        <div>
            <p>{developer.name}</p>
            <img src={developer.image_background} alt="" className='w-[200px]' />
        </div>
      ))}
    </div>
  )
}
