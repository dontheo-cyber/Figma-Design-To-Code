import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import MainStackLogo from "../assets/icons/mainstack-logo.svg"
import ProfilePicture from "../assets/images/profile-picture.svg"
import dbActive from "../assets/icons/dashboard.svg"

const SideBar = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

  return (
    <div className='bg-main h-full border-r-tertiary border-l-2'>
        <div className='h-full flex flex-col'>
            <div className='pl-10 pt-5'>
                <Link to="/">
                    <img src={MainStackLogo} alt="mainstack logo" />
                </Link>
            </div>
            <div className='h-full flex flex-col justify-between text-xs font-medium'>
                <div className='mt-10'>
                    <div>
                        <Link to="/dashboard" className={ splitLocation[1] === "dashboard" ? `pl-10 border-l-primary text-primary border-l-2 rounded-l-lg py-3 rounded-r-full w-full flex items-center` : "pl-10 mb-2 py-3 flex items-center"}>
                            {
                                splitLocation[1] === "dashboard" ? <img src={dbActive} className="mr-3" /> : <img src={dbActive} className="mr-3" />
                            }
                                <span>Dashboard</span>
                        </Link>
                        <Link to="/" className={ splitLocation[1] === "1" ? `pl-10 border-l-primary text-primary border-l-2 rounded-l-lg py-3 rounded-r-full w-full flex items-center` : "pl-10 py-3 flex items-center"}>
                            {
                                splitLocation[1] === "1" ? <img src={dbActive} className="mr-3" /> : <img src={dbActive} className="mr-3" />
                            }
                                <span>Item 1</span>
                        </Link>
                        <Link to="/" className={ splitLocation[1] === "1" ? `pl-10 border-l-primary text-primary border-l-2 rounded-l-lg py-3 rounded-r-full w-full flex items-center` : "pl-10 py-3 flex items-center"}>
                            {
                                splitLocation[1] === "1" ? <img src={dbActive} className="mr-3" /> : <img src={dbActive} className="mr-3" />
                            }
                                <span>Item 2</span>
                        </Link>
                        <Link to="/" className={ splitLocation[1] === "1" ? `pl-10 border-l-primary text-primary border-l-2 rounded-l-lg py-3 rounded-r-full w-full flex items-center` : "pl-10  py-3 flex items-center"}>
                            {
                                splitLocation[1] === "1" ? <img src={dbActive} className="mr-3" /> : <img src={dbActive} className="mr-3" />
                            }
                                <span>Item 2</span>
                        </Link>
                    </div>
                    <div className='my-6'>
                        <h6 className='pl-10 uppercase'>Others 1</h6>
                        <Link to="/" className={ splitLocation[1] === "1" ? `pl-10 border-l-primary text-primary border-l-2 rounded-l-lg py-3 rounded-r-full w-full flex items-center` : "pl-10 py-3 flex items-center"}>
                            {
                                splitLocation[1] === "1" ? <img src={dbActive} className="mr-3" /> : <img src={dbActive} className="mr-3" />
                            }
                                <span>Item 4</span>
                        </Link>
                        <Link to="/" className={ splitLocation[1] === "1" ? `pl-10 border-l-primary text-primary border-l-2 rounded-l-lg py-3 rounded-r-full w-full flex items-center` : "pl-10 py-3 flex items-center"}>
                            {
                                splitLocation[1] === "1" ? <img src={dbActive} className="mr-3" /> : <img src={dbActive} className="mr-3" />
                            }
                                <span>Item 5</span>
                        </Link>
                    </div>
                    <div>
                        <h6 className='pl-10 uppercase'>Others 2</h6>
                        <Link to="/" className={ splitLocation[1] === "1" ? `pl-10 border-l-primary text-primary border-l-2 rounded-l-lg py-3 rounded-r-full w-full flex items-center` : "pl-10 py-3 flex items-center"}>
                            {
                                splitLocation[1] === "1" ? <img src={dbActive} className="mr-3" /> : <img src={dbActive} className="mr-3" />
                            }
                                <span>Item 6</span>
                        </Link>
                        <Link to="/" className={ splitLocation[1] === "1" ? `pl-10 border-l-primary text-primary border-l-2 rounded-l-lg py-3 rounded-r-full w-full flex items-center` : "pl-10 py-3 flex items-center"}>
                            {
                                splitLocation[1] === "1" ? <img src={dbActive} className="mr-3" /> : <img src={dbActive} className="mr-3" />
                            }
                                <span>Item 7</span>
                        </Link>
                        <Link to="/" className={ splitLocation[1] === "1" ? `pl-10 border-l-primary text-primary border-l-2 rounded-l-lg py-3 rounded-r-full w-full flex items-center` : "pl-10 py-3 flex items-center"}>
                            {
                                splitLocation[1] === "1" ? <img src={dbActive} className="mr-3" /> : <img src={dbActive} className="mr-3" />
                            }
                                <span>Item 8</span>
                        </Link>
                    </div>
                </div>
                <div className='p-10 flex items-center'>
                    <img src={ProfilePicture} className='rounded-full mr-2' />
                    <h6 className=''>Blessing Daniels</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar