import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'
import { CoffeeInfos, CoffeeItem } from './styles'
import { RemoveCoffeeButton } from '../RemoveCoffeeButton'
import { AmountSelector } from '../AmountSelector'

import type { SelectedCoffee } from '../../@types/coffee'

interface SelectedCoffeeProps {
  coffee: SelectedCoffee
}

export function SelectedCoffee({ coffee }: SelectedCoffeeProps) {
  const { increaseAmount, decreaseAmount } = useContext(CartContext)

  function handleIncreaseAmount() {
    increaseAmount(coffee.id)
  }

  function handleDecreaseAmount() {
    decreaseAmount(coffee.id)
  }

  const formatedTotalPrice = Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',
  }).format(coffee.totalPrice)

  return (
    <CoffeeItem key={coffee.id}>
      <img src={coffee.image} alt="" />
      <CoffeeInfos>
        <h3>{coffee.title}</h3>
        <div className="buttons">
          <AmountSelector
            amount={coffee.selectedAmount}
            onDecreaseAmount={handleDecreaseAmount}
            onIncreaseAmount={handleIncreaseAmount}
          />
          <RemoveCoffeeButton coffeeId={coffee.id} />
        </div>
      </CoffeeInfos>
      <h3>{formatedTotalPrice}</h3>
    </CoffeeItem>
  )
}
