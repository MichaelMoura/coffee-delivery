import {
  CheckoutSummaryContainer,
  CheckoutBlock,
  CoffeeList,
  CheckoutButton,
  CoffeeSummary,
  SubTotal,
  Total,
} from './styles'

import { useContext } from 'react'
import { CartContext } from '../../../../contexts/Cart'
import { SelectedCoffee } from '../../../../components/SelectedCoffee'

function formatCurrency(value: number) {
  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',
  }).format(value)
}

export function CheckoutSummary() {
  const { cart } = useContext(CartContext)

  const coffeesSelected = cart.map((item) => {
    const coffee = item.coffee

    return {
      id: coffee.id,
      title: coffee.title,
      image: coffee.image,
      unitPrice: coffee.price,
      totalPrice: coffee.price * item.amount,
      selectedAmount: item.amount,
    }
  })

  const subTotal = coffeesSelected.reduce(
    (acc, coffee) => (acc += coffee.totalPrice),
    0,
  )

  const shippingTax = cart.length ? 3.5 : 0
  const total = subTotal + shippingTax

  return (
    <CheckoutSummaryContainer>
      <h3>Cafés Selecionados</h3>
      <CheckoutBlock>
        <CoffeeList>
          {coffeesSelected.map((coffee) => (
            <SelectedCoffee key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
        <CoffeeSummary>
          <SubTotal>
            <h3>Total de items</h3>
            <span>{formatCurrency(subTotal)}</span>
          </SubTotal>
          <SubTotal>
            <h3>Entrega</h3>
            <span>{formatCurrency(shippingTax)}</span>
          </SubTotal>
          <Total>
            <h3>Total</h3>
            <span>{formatCurrency(total)}</span>
          </Total>
          <CheckoutButton type="submit" disabled={!total}>
            {total ? 'Finalizar Compra' : 'Selecione um café'}
          </CheckoutButton>
        </CoffeeSummary>
      </CheckoutBlock>
    </CheckoutSummaryContainer>
  )
}
