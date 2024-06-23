import { Minus, Plus } from 'phosphor-react'
import { AmountButton, AmountSelectorContainer } from './styles'

interface AmountSelectorProps {
  amount: number
  onDecreaseAmount: () => void
  onIncreaseAmount: () => void
}

export function AmountSelector({
  amount,
  onDecreaseAmount,
  onIncreaseAmount,
}: AmountSelectorProps) {
  return (
    <AmountSelectorContainer>
      <AmountButton className="Minus" onClick={onDecreaseAmount} type="button">
        <Minus size={14} weight="bold" />
      </AmountButton>
      <span>{amount}</span>
      <AmountButton className="Plus" onClick={onIncreaseAmount} type="button">
        <Plus size={14} weight="bold" />
      </AmountButton>
    </AmountSelectorContainer>
  )
}
