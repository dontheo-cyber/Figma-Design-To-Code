import React from 'react'

const TimeButton = ({title, className, active}) => {
  return (
    <>
        <button className={`rounded-full text-greyText py-3 p-5 mr-3 font-medium border-2 border-greyBorder`}>
            {title}
        </button>
    </>
  )
}

export default TimeButton