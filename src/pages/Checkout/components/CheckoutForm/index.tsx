import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  BlockHeader,
  BlockHeaderDescription,
  CheckoutBlock,
  Input,
  PaymentMethod,
  PaymentMethodContainer,
  CheckoutFormContainer,
  FormContainer,
} from './styles'
import { useFormContext } from 'react-hook-form'
import { ShippingShemaForm } from '../..'

export function CheckoutForm() {
  const { register } = useFormContext<ShippingShemaForm>()

  return (
    <CheckoutFormContainer>
      <h3>Complete seu Pedido</h3>
      <CheckoutBlock>
        <BlockHeader iconcolor="yellow-dark">
          <MapPinLine size={24} />
          <BlockHeaderDescription>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </BlockHeaderDescription>
        </BlockHeader>

        <FormContainer>
          <Input type="text" placeholder="CEP" {...register('zipCode')} />
          <Input type="text" placeholder="Rua" {...register('street')} />
          <Input type="text" placeholder="Número" {...register('number')} />
          <Input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          <Input
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <Input type="text" placeholder="Cidade" {...register('city')} />
          <Input type="text" placeholder="UF" {...register('uf')} />
        </FormContainer>
      </CheckoutBlock>
      <CheckoutBlock>
        <BlockHeader iconcolor="purple">
          <CurrencyDollar size={24} />
          <BlockHeaderDescription>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </BlockHeaderDescription>
        </BlockHeader>
        <PaymentMethodContainer>
          <PaymentMethod>
            <CreditCard size={16} />
            <input
              type="radio"
              id="credit-card"
              {...register('payment')}
              value="credit-card"
            />
            Cartão de Crédito
          </PaymentMethod>
          <PaymentMethod>
            <Bank size={16} />
            <input
              type="radio"
              id="debit-card"
              {...register('payment')}
              value="debit-card"
            />
            Cartão de Débito
          </PaymentMethod>
          <PaymentMethod>
            <Money size={16} />
            <input
              type="radio"
              id="money"
              {...register('payment')}
              value="money"
            />
            Dinheiro
          </PaymentMethod>
        </PaymentMethodContainer>
      </CheckoutBlock>
    </CheckoutFormContainer>
  )
}
