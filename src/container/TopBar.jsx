import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const TopBar = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

  return (
    <div className='w-full'>
        <div className=''>
            <h3 className='capitalize py-4 font-semibold'>{splitLocation[1]}</h3>
        </div>
    </div>
  )
}

export default TopBar