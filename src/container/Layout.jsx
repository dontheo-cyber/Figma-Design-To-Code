import React, { useState } from 'react'
import SideBar from "../container/SideBar"
import TopBar from "../container/TopBar"
const Layout = ({ children, liveMode, setLiveMode }) => {

    
  return (
    <div className='block w-full h-screen overflow-hidden'>
        <div className='grid lg:grid-cols-7 h-full'>
            <div className='col-span-1 h-full hidden lg:block'>
                <SideBar />
            </div>
           <div className='lg:col-span-6 px-10 relative bg-main h-full overflow-hidden'>
                <div className='flex relative overflow-x-hidden h-full flex-col'>
                    <div className='left-0 top-0 right-0'>
                        <TopBar liveMode={liveMode} setLiveMode={setLiveMode} />
                    </div>
                    <div className='h-full'>
                        { children }
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Layout
