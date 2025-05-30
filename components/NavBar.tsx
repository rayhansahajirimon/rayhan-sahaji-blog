import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='h-16 bg-background/60 sticky top-0 border-b'>
      <div>
        Rayhan Sahaji Blog
      </div>
        <ul>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/about"}>About</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar