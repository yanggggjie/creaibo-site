import React from 'react'
import IconDock from '@/pages/IconDock/IconDock.tsx'
import TopTab from '@/pages/TopTab/TopTab.tsx'
import { twMerge } from 'tailwind-merge'
interface Props {}

export default function Index({}: Props) {
  return (
    <div className={'h-screen grid place-items-center'}>
      <div className={'fixed top-[48px] left-1/2 -translate-x-1/2'}>
        <TopTab></TopTab>
      </div>
      <div className={'flex flex-col items-center'}>
        <button className={'text-[32px] text-[#1E5DFF] font-bold'}>
          Creaibo
        </button>
        <div className={'h-[30px]'}></div>
        <div className={'text-[48px] text-[#122146] font-bold'}>
          让你的创作立即提效
        </div>
        <IconDock></IconDock>
        <div className={'h-[30px]'}></div>
        <button
          className={twMerge(
            'bg-[#165DFF] w-[128px] h-[48px] rounded-[6px] text-white grid place-items-center',
            'hover:opacity-70',
          )}
        >
          申请内测
        </button>
      </div>
    </div>
  )
}
