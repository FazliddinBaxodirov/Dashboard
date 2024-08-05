import React from 'react'
import Header from '../components/Header';
import Card from '../components/card';
import Divcard from '../components/Divcard';
import Item from '../components/Item';
import SecondItem from '../components/SecondItem';

export default function Overview() {
  return (
    <div className='w-[82%] h-screen overflow-y-auto px-[32px] bg-[#F7F8FC] pb-[30px] '>
      <Header title={'Overview'}/>
      <div className='flex justify-between'>
        <Card title={"Unresolved"} count={"60"}/>
        <Card title={"Overdue"} count={"16"}/>
        <Card title={"Open"} count={"43"}/>
        <Card title={"On hold"} count={"64"}/>
      </div>
      <div className='flex bg-white mt-[30px] rounded-md border-[1px] border-[#DFE0EB] '>
        <div className='w-[70%] p-[32px] border-r-[1px] border-r-[#DFE0EB]'>
            <p className='font-bold text-[19px] leading-[24px] tracking-[0.4px] text-[#252733] mb-[8px]'>Today’s trends</p>
            <div className='flex justify-between'>
                <span className='font-normal text-[12px] leading-[16px] tracking-[0.1px] text-[#9FA2B4]'>as of 25 May 2019, 09:41 PM</span>
                <div className='flex items-center space-x-[32px]'>
                    <div className='flex items-center space-x-[8px]'>
                        <div className='w-[16px] h-[2px] rounded-md bg-[#3751FF]'></div>
                        <span className='font-normal text-[12px] leading-[16px] tracking-[0.1px] text-[#9FA2B4]'>Today</span>
                    </div>
                    <div className='flex items-center space-x-[8px]'>
                        <div className='w-[16px] h-[2px] rounded-md bg-[#DFE0EB]'></div>
                        <span className='font-normal text-[12px] leading-[16px] tracking-[0.1px] text-[#9FA2B4]'>Yesterday</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[30%] rounded-tr-md rounded-br-md'>
            <Divcard title={"Resolved"} count={"449"} extraStyle={'w-full text-center pt-[24px] pb-[24px] border-b-[1px]  border-b-[DFE0EB]'}/>
            <Divcard title={"Received"} count={"426"} extraStyle={'w-full text-center pt-[24px] pb-[24px] border-b-[1px]  border-b-[DFE0EB]'}/>
            <Divcard title={"Average first response time"} count={"33m"} extraStyle={'w-full text-center pt-[24px] pb-[24px] border-b-[1px]  border-b-[DFE0EB]'}/>
            <Divcard title={"Average response time"} count={"3h 8m"} extraStyle={'w-full text-center pt-[24px] pb-[24px] border-b-[1px]  border-b-[DFE0EB]'}/>
            <Divcard title={"Resolution within SLA"} count={"94%"} extraStyle={'w-full text-center pt-[24px] pb-[24px]'}/>
        </div>
      </div>
      <div className='flex w-full justify-between mt-[30px]  '>
        <div className='w-[48%] bg-white rounded-md border-[#DFE0EB] border-[1px]'>
            <div className='px-[32px] pt-[32px] pb-[16px]'>
                <div className='flex justify-between mb-[8px]'>
                <h3 className='font-bold text-[19px] leading-[24px] tracking-[0.4px] text-[#252733]'>Unresolved tickets</h3>
                <a className='font-semibold text-[14px] leading-[20px] traacking-[0.2px] text-[#3751FF]' href="#">View details</a>
                </div>
                <p className='font-normal text-[12px] leading-[16px] tracking-[0.1px] text-[#9FA2B4]'>Groups : <span className='font-semibold text-[12px] leading-[15px] text-[#535353]'> Support</span></p>
            </div>    
            <ul>
                <Item title={"Waiting on Feature Request"} count={'4238'}/>
                <Item title={"Awaiting Customer Response"} count={'1005'}/>
                <Item title={"Awaiting Developer Fix"} count={'914'}/>
                <Item title={"Pending"} count={'281'} extrastyle={"border-b-transparent"}/>
            </ul>
        </div>
        <div className='w-[48%] bg-white rounded-md border-[#DFE0EB] border-[1px]'>
        <div className='px-[32px] pt-[32px] pb-[16px]'>
            <div className='flex justify-between mb-[8px]'>
                <h3 className='font-bold text-[19px] leading-[24px] tracking-[0.4px] text-[#252733]'>Tasks</h3>
                <a className='font-semibold text-[14px] leading-[20px] traacking-[0.2px] text-[#3751FF]' href="#">View all</a>
                </div>
                <p className='font-normal text-[12px] leading-[16px] tracking-[0.1px] text-[#9FA2B4]'>Today</p>
            </div>
            <ul>
                <li className='px-[32px] py-[19px] flex items-center justify-between'>
                    <input type="text" placeholder='Create new task' className='outline-none placeholder:font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-[#C5C7CD]'/>
                    <span className='rounded-md text-[#9FA2B4] bg-[#F0F1F7] text-[10px]'>+</span>
                </li>
                <SecondItem title={'Finish ticket update'} text={'URGENT'} extrartyle={'text-white bg-[#FEC400] px-[12px] py-[3.5px] rounded-[8px] font-normal'}/>
                <SecondItem title={'Create new ticket example'} text={'NEW'} extrartyle={'text-white bg-[#29CC97] px-[12px] py-[3.5px] rounded-[8px] font-normal'}/>
                <SecondItem title={'Update ticket report'} text={'DEFAULT'} extrartyle={'bg-[#F0F1F7] text-[#9FA2B4] px-[12px] py-[3.5px] rounded-[8px] font-normal'}/>
            </ul>     
        </div>
      </div>
    </div>
  )
}
