import React from 'react'
import TimeButton from '../components/TimeButton'

const GraphComponent = () => {
  return (
    <div>
        <div className='flex items-center mb-5'>
            <TimeButton title="1 Day"/>
            <TimeButton title="3 Days"/>
            <TimeButton title="7 Day"/>
            <TimeButton title="30 Days"/>
            <TimeButton title="All Time"/>
            <TimeButton title="Custom Date"/>
        </div>
        <div>
            Main Graph goes here...
        </div>
    </div>
  )
}

export default GraphComponent