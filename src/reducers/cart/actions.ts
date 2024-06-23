import { Coffee } from '../../@types/coffee'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  INCREASE_AMOUNT = 'INCREASE_AMOUNT',
  DECREASE_AMOUNT = 'DECREASE_AMOUNT',
}

export function addNewCoffeeToCartAction(coffee: Coffee, amount: number) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { coffee, amount },
  }
}

export function removeFromCartAction(id: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { id },
  }
}

export function increaseAmountAction(id: string) {
  return {
    type: ActionTypes.INCREASE_AMOUNT,
    payload: { id },
  }
}

export function decreaseAmountAction(id: string) {
  return {
    type: ActionTypes.DECREASE_AMOUNT,
    payload: { id },
  }
}
