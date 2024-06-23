import { Coffee } from './coffee'

interface CartItem {
  id: string
  amount: number
  coffee: Coffee
}

interface CartContextData {
  cart: CartItem[]
  addToCart: (coffee: Coffee, amount: number) => void
  removeFromCart: (id: string) => void
  increaseAmount: (id: string) => void
  decreaseAmount: (id: string) => void
}
