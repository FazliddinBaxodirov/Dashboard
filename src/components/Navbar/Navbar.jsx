import React from 'react'
import {Logo, OverWievIcon,TicketsIcon,IdeasIcon,ContactsIcon,AgentsIcon,ArticlesIcon,SettingIcon,SubscriptionIcon } from '../Icons'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='w-[18%] h-screen bg-[#363740] flex flex-col '>
      <div className='flex items-center mb-[63px] mt-[41px] mr-[43px] ml-[32px] space-x-[12px]'>
        <Logo/>
        <p className='font-Mulish font-bold text-[19px] leading-[24px] tracking-[0.4px] text-[#A4A6B3]'>Dashboard kit</p>
      </div>
      <div className=''>
        <NavLink className={'py-[20px] px-[32px] flex items-center space-x-[24px] font-normal text-[16px] leading-5 tracking-[0.2px] text-[#A4A6B3] border-[3px] border-transparent'} to={"/"}>
            <OverWievIcon/>
            <span>Overview</span>
        </NavLink>
        <NavLink className={'py-[20px] px-[32px] flex items-center space-x-[24px] font-normal text-[16px] leading-5 tracking-[0.2px] text-[#A4A6B3] border-[3px] border-transparent'} to={"/tickets"}>
            <TicketsIcon/>
            <span>Tickets</span>
        </NavLink>
        <NavLink className={'py-[20px] px-[32px] flex items-center space-x-[24px] font-normal text-[16px] leading-5 tracking-[0.2px] text-[#A4A6B3] border-[3px] border-transparent'} to={"/ideas"}>
            <IdeasIcon/>
            <span>Ideas</span>
        </NavLink>
        <NavLink className={'py-[20px] px-[32px] flex items-center space-x-[24px] font-normal text-[16px] leading-5 tracking-[0.2px] text-[#A4A6B3] border-[3px] border-transparent'} to={"/contacts"}>
            <ContactsIcon/>
            <span>Contacts</span>
        </NavLink>
        <NavLink className={'py-[20px] px-[32px] flex items-center space-x-[24px] font-normal text-[16px] leading-5 tracking-[0.2px] text-[#A4A6B3] border-[3px] border-transparent'} to={"/agents"}>
            <AgentsIcon/>
            <span>Agents</span>
        </NavLink>
        <NavLink className={'py-[20px] px-[32px] flex items-center space-x-[24px] font-normal text-[16px] leading-5 tracking-[0.2px] text-[#A4A6B3] border-[3px] border-transparent'} to={"/articles"}>
            <ArticlesIcon/>
            <span>Articles</span>
        </NavLink>
        <div className='w-full h-[1px] bg-[#DFE0EB] my-[16px]'></div>
        <NavLink className={'py-[20px] px-[32px] flex items-center space-x-[24px] font-normal text-[16px] leading-5 tracking-[0.2px] text-[#A4A6B3] border-[3px] border-transparent'} to={"/settings"}>
            <SettingIcon/>
            <span>Settings</span>
        </NavLink>
        <NavLink className={'py-[20px] px-[32px] flex items-center space-x-[24px] font-normal text-[16px] leading-5 tracking-[0.2px] text-[#A4A6B3] border-[3px] border-transparent'} to={"/subscription"}>
            <SubscriptionIcon/>
            <span>Subscription</span>
        </NavLink>
      </div>
    </div>
  )
}
