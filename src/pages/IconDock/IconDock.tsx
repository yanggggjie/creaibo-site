import React from 'react'
import { Dock, DockIcon } from '@/components/ui/dock.tsx'
import YellowSVG from './yellow.svg?react'
import GreenSVG from './green.svg?react'
import BlueSVG from './blue.svg?react'
import PurpleSVG from './purple.svg?react'
import PinkSVG from './pink.svg?react'
import ToolTipContent from '@/pages/IconDock/ToolTipContent.tsx'
import IconTooltip from '@/pages/IconDock/IconTooltip.tsx'

interface Props {}
const Icons = [YellowSVG, GreenSVG, BlueSVG, PurpleSVG, PinkSVG]
export default function IconDock({}: Props) {
  const iconList = [
    {
      icon: <YellowSVG></YellowSVG>,
      content: (
        <ToolTipContent text="激发创作灵感" color={'#FFC227'}></ToolTipContent>
      ),
    },
    {
      icon: <GreenSVG></GreenSVG>,
      content: (
        <ToolTipContent text="智能辅助创作" color={'#0ADF52'}></ToolTipContent>
      ),
    },
    {
      icon: <BlueSVG></BlueSVG>,
      content: (
        <ToolTipContent text="素材轻松生成" color={'#1E5DFF'}></ToolTipContent>
      ),
    },
    {
      icon: <PurpleSVG></PurpleSVG>,
      content: (
        <ToolTipContent text="推荐发布配置" color={'#903AFE'}></ToolTipContent>
      ),
    },
    {
      icon: <PinkSVG></PinkSVG>,
      content: (
        <ToolTipContent text="高效跟踪数据" color={'#FF699F'}></ToolTipContent>
      ),
    },
  ]

  return (
    <Dock direction="middle" className={'border-0'}>
      {iconList.map((icon, index) => (
        <DockIcon key={index}>
          <IconTooltip content={icon.content}>{icon.icon}</IconTooltip>
        </DockIcon>
      ))}
    </Dock>
  )
}
