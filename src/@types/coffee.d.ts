export interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export interface SelectedCoffee {
  id: string
  title: string
  image: string
  unitPrice: number
  totalPrice: number
  selectedAmount: number
}
