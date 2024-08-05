import React from 'react'

export default function Divcard({extraStyle,title,count}) {
  return (
    <div className={`${extraStyle}`}>
      <p className='font-semibold text-[16px] leading-[22px] tracking-[0.3px] text-[#9FA2B4] mb-[6px]'>{title}</p>
      <p className='font-bold text-[24px] leading-[30px] tracking-[0.3px] text-[#252733]'>{count}</p>
    </div>
  )
}
