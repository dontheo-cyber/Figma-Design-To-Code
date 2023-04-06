import React from 'react'
import { Link } from 'react-router-dom'

const Greetings = () => {
  return (
    <div className='flex py-5 justify-between items-center mb-5'>
        <div>
            <h3 className='text-2xl font-bold leading-8 mb-2'>Good morning, <span>Blessing</span></h3>
            <p className='text-sm text-greyText'>Check out your dashboard summary.</p>
        </div>
        <div>
            <Link to="#" className='text-primary text-sm'>View analytics</Link>
        </div>
    </div>
  )
}

export default Greetings