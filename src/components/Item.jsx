import React from 'react'

export default function Item({title,count,extrastyle}) {
  return (
    <li className={`flex justify-between py-[19px] px-[32px]  border-b-[1px] ${extrastyle}`}>
        <p className='font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-[#252733]'>{title}</p>
        <span className={`font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-[#9FA2B4]`}>{count}</span>
    </li>
  )
}
