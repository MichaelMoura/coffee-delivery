interface Shipping {
  zipCode: string
  steet: string
  number: number
  complement: string
  neighborhood: string
  city: string
  state: string
  uf: string
}

interface ShippingContextData {
  shipping: Shipping
  setShipping: (shipping: Shipping) => void
}
