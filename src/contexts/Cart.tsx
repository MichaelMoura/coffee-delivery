import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CartContextData, CartItem } from '../@types/cart'
import { Coffee } from '../@types/coffee'
import { cartReducer } from '../reducers/cart/cart'
import {
  addNewCoffeeToCartAction,
  decreaseAmountAction,
  increaseAmountAction,
  removeFromCartAction,
} from '../reducers/cart/actions'

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [] as CartItem[], () => {
    const storagedCart = localStorage.getItem('@coffee-cart')

    if (storagedCart) {
      return JSON.parse(storagedCart) as CartItem[]
    }

    return [] as CartItem[]
  })

  function addToCart(coffee: Coffee, amount: number) {
    dispatch(addNewCoffeeToCartAction(coffee, amount))
  }

  function removeFromCart(id: string) {
    dispatch(removeFromCartAction(id))
  }

  function increaseAmount(id: string) {
    dispatch(increaseAmountAction(id))
  }

  function decreaseAmount(id: string) {
    dispatch(decreaseAmountAction(id))
  }

  useEffect(() => {
    if (cart.length === 0) return

    if (cart.some((item) => item.amount < 1)) {
      const cartWithZeroAmount = cart.find(
        (item) => item.amount === 0,
      ) as CartItem

      dispatch(removeFromCartAction(cartWithZeroAmount.id))
    }
    localStorage.setItem('@coffee-cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
