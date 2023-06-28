import React from 'react'
import SideBarIcon from './SideBarIcon'
import { BsDiscord, BsGearFill, BsPlus, BsFire } from 'react-icons/bs'
import { CgProfile } from "react-icons/cg";

const Divider = () => {
    return (
        <hr className='w-12 mx-auto' />
    )
}

const Sidebar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen flex flex-col bg-primary text-white w-16 m-0 shadow-lg'>
            <div>
                <SideBarIcon icon={<BsDiscord size="28" />} />
            </div>
            <Divider />
            <div className='flex-grow'>
                <SideBarIcon icon={<BsFire size="28" />} />
                <SideBarIcon icon={<BsPlus size="28" />} />
            </div>
            <Divider />
            <div>
                <SideBarIcon icon={<CgProfile size="28" />} />
                <SideBarIcon icon={<BsGearFill size="28" />} />
            </div>
        </div>
    )
}

export default Sidebar