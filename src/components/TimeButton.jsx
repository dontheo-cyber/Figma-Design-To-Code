import React, { useState } from 'react'

const TimeButton = ({title, buttonNumber, isActive, onClick}) => {
    const handleClick = () => {
        onClick(buttonNumber);
    };

  return (
    <>
        <button className={`rounded-full text-greyText py-3 p-5 mr-3 font-medium border-2 border-greyBorder ${isActive  ? "text-primary border-primary bg-primary bg-opacity-10" : ""}`} onClick={handleClick}>
            {title}
        </button>
    </>
  )
}

export default TimeButton