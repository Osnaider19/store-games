import React from 'react'

function NavItem({link ,name}) {
  return (
    <li className='px-3 py-1'>
        <a href={link}>{name}</a>
    </li>
  )
}

export default NavItem