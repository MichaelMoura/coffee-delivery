import { CartItem } from '../../@types/cart'
import { ActionTypes } from './actions'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function cartReducer(state: CartItem[], action: any) {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.ADD_TO_CART: {
      const alreadyInCart = state.some((item) => item.id === payload.coffee.id)

      if (alreadyInCart) {
        return state.map((item) => {
          if (item.id === payload.coffee.id) {
            return {
              ...item,
              amount: item.amount + payload.amount,
            }
          }

          return item
        })
      }

      return [
        ...state,
        {
          id: payload.coffee.id,
          coffee: payload.coffee,
          amount: payload.amount,
        },
      ]
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const { id } = payload

      return state.filter((item) => item.id !== id)
    }

    case ActionTypes.INCREASE_AMOUNT: {
      const { id } = payload

      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount + 1,
          }
        }

        return item
      })
    }

    case ActionTypes.DECREASE_AMOUNT: {
      const { id } = payload

      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: item.amount - 1,
          }
        }

        return item
      })
    }
  }

  if (type === 'REMOVE_FROM_CART') {
    const { id } = payload

    return state.filter((item) => item.id !== id)
  }

  return state
}
