import styled from 'styled-components'
import { theme } from '../../../../styles/theme'

export const possibleColors = {
  yellow: theme.yellow,
  purple: theme.purple,
  gray: theme['base-text'],
  yellowDark: theme['yellow-dark'],
} as const

interface CircleWrapperProps {
  color: keyof typeof possibleColors
}

export const ItemCircleWrapper = styled.div<CircleWrapperProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 50%;

    background-color: ${(props) => possibleColors[props.color]};
  }

  svg {
    color: ${(props) => props.theme.white};
  }

  b {
    color: ${(props) => props.theme['base-text']};
  }
`
