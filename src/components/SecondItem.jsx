import React from 'react'

export default function SecondItem({title,text,extrartyle}) {
  return (
    <li className='flex justify-between py-[19px] px-[32px]  border-b-[1px]'>
        <div className='flex space-x-[16px]'>
        <input type="checkbox" className='rounded-[9999px]' />
        <p className='font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-[#252733] '>{title}</p>
        </div>
        <span className={`font-semibold text-[11px] leading-[14px] tracking-[0.5px] ${extrartyle}`}>{text}</span>
    </li>
  )
}
