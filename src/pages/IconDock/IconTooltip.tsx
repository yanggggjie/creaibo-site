import React, { ReactNode } from 'react'
import ArrowSVG from './arrow.svg?react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip.tsx'
interface Props {
  children: ReactNode
  content: ReactNode
}

export default function IconTooltip({ children, content }: Props) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          side={'top'}
          className={'bg-gray-100 outline  shadow-2xl'}
        >
          {content}
          <ArrowSVG
            className={
              'z-20 absolute bottom-0 translate-y-[100%] left-1/2 -translate-x-1/2'
            }
          ></ArrowSVG>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
