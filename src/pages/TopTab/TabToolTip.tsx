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
}

export default function TabToolTip({ children }: Props) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent side={'top'}>
          敬请期待
          <ArrowSVG
            className={
              'z-20 absolute bottom-[0px] translate-y-[100%] left-1/2 -translate-x-1/2'
            }
          ></ArrowSVG>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
