import React from 'react'
interface Props {
  text: string
  color: string
}

export default function ToolTipContent({ text, color }: Props) {
  return (
    <div
      style={{
        color,
      }}
      className={'font-bold'}
    >
      {text}
    </div>
  )
}
