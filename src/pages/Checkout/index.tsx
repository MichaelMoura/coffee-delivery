import { FormProvider, useForm } from 'react-hook-form'
import { CheckoutSummary } from './components/CheckoutSummary'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutContainer } from './styles'
import { useNavigate } from 'react-router-dom'

export const shippingSchema = z.object({
  zipCode: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.optional(z.string()),
  neighborhood: z.string(),
  city: z.string(),
  uf: z.string(),
  payment: z.enum(['money', 'credit-card', 'debit-card']).nullable(),
})

export type ShippingShemaForm = z.infer<typeof shippingSchema>

export function Checkout() {
  const shippingForm = useForm<ShippingShemaForm>({
    resolver: zodResolver(shippingSchema),
  })
  const navigate = useNavigate()

  function onSubmit(data: ShippingShemaForm) {
    console.log(data)
    navigate('/success')
  }

  const { handleSubmit } = shippingForm

  return (
    <CheckoutContainer onSubmit={handleSubmit(onSubmit)}>
      <FormProvider {...shippingForm}>
        <CheckoutForm />
        <CheckoutSummary />
      </FormProvider>
    </CheckoutContainer>
  )
}
