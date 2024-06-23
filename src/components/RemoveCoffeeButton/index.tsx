import { Trash } from 'phosphor-react'
import { RemoveCoffeeButtonContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'

interface RemoveCoffeeButtonProps {
  coffeeId: string
}

export function RemoveCoffeeButton({ coffeeId }: RemoveCoffeeButtonProps) {
  const { removeFromCart } = useContext(CartContext)

  function handleRemoveCoffee() {
    removeFromCart(coffeeId)
  }

  return (
    <RemoveCoffeeButtonContainer onClick={handleRemoveCoffee}>
      <Trash size={16} />
      REMOVER
    </RemoveCoffeeButtonContainer>
  )
}
