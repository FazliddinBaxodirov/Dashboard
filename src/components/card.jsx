import React from 'react'

export default function Card({title,count}) {
  return (
    <div className={`w-[258px] h-[134px] bg-white text-center py-[24px] border-[1px] border-[#DFE0EB] group rounded-[8px] duration-300 hover:border-[#3751FF]  `}>
        <p className={`font-bold text-[19px] leading-[24px] tracking-[0.4px]  text-[#9FA2B4] hover:text-[#3751FF]`}>{title}</p>
        <p className={`font-bold text-[40px] mt-[12px] leading-[50px] tracking-[1px]  text-[#252733] hover:text-[#3751FF]`}>{count}</p>
    </div>
  )
}
