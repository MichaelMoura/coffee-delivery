import { IconProps } from 'phosphor-react'
import { ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react'
import { ItemCircleWrapper, possibleColors } from './styles'

type IconPhosphorType = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>

interface CircleInfoProps {
  icon: IconPhosphorType
  text: string | ReactNode
  color: keyof typeof possibleColors
}

export function CircleInfo({ color, icon, text }: CircleInfoProps) {
  const Icon = icon

  return (
    <ItemCircleWrapper color={color}>
      <div className="circle">
        <Icon weight="fill" size={16} />
      </div>

      <span>{text}</span>
    </ItemCircleWrapper>
  )
}
