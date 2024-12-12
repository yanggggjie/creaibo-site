import React from 'react'
import TabToolTip from '@/pages/TopTab/TabToolTip.tsx'
import { twMerge } from 'tailwind-merge'
interface Props {}

export default function TopTab({}: Props) {
  const tabList = [
    {
      title: '功能',
    },
    {
      title: '定价',
    },
    {
      title: '咨询',
    },
  ]
  return (
    <div
      className={twMerge(
        'flex flex-row items-center gap-[48px] rounded-full border-[#F1F3F8] border-[1px] bg-gray-50 bg-opacity-80',
        'px-[24px] py-[19.5px]',
        'px-[24px] py-[9.5px]',
      )}
    >
      <button className={'text-[#162446] text-[20px] font-bold'}>
        Creaibo
      </button>
      {tabList.map((item) => {
        return (
          <TabToolTip>
            <button
              className={
                'w-[28px] h-[14px] grid place-items-center text-[14px] text-[#122146] opacity-40'
              }
            >
              {item.title}
            </button>
          </TabToolTip>
        )
      })}
    </div>
  )
}
