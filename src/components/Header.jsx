import React from 'react'
import { SearchIcon,NotificationIcon,AvatarIcon } from './Icons'
import avatar from '../assets/images/avatar.svg'

export default function Header({title}) {
  return (
    <div className=' pt-[30px] pb-[54px] flex justify-between'>
      <h2 className='font-bold text-[24px] leading-[30px] tracking-[0.3px] text-[#252733]'>{title}</h2>
      <div className='flex items-center space-x-[32px]'>
        <div className='flex items-center space-x-[24px]'>
            <SearchIcon />
            <NotificationIcon/>
        </div>
        <div className='w-[1px] h-[32px] bg-[#DFE0EB]'></div>
        <div className='flex items-center space-x-[14px]'>
        <p>Jones Ferdinand</p>
        <img src={avatar} alt="photo" />
        </div>
      </div>
    </div>
  )
}
