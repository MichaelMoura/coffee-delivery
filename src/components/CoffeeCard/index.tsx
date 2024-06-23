import { Coffee } from '../../@types/coffee'
import {
  AddToCartButton,
  BuyContainer,
  Card,
  CoffeeValue,
  Description,
  Image,
  Tags,
  TagsWrapper,
  Title,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { AmountSelector } from '../../components/AmountSelector'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/Cart'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addToCart } = useContext(CartContext)
  const [amount, setAmount] = useState<number>(1)

  const coffeeValue = Intl.NumberFormat('pt-br', {
    style: 'decimal',
    minimumFractionDigits: 2,
  }).format(coffee.price)

  function handleDecreaseAmount() {
    if (amount > 1) {
      return setAmount((prevAmount) => prevAmount - 1)
    }

    return setAmount(1)
  }

  function handleIncreaseAmount() {
    return setAmount((prevAmount) => prevAmount + 1)
  }

  function handleAddToCart() {
    addToCart(coffee, amount)
  }

  return (
    <Card>
      <Image src={coffee.image} alt={coffee.title} />
      <div className="info">
        <TagsWrapper>
          {coffee.tags.map((tag) => (
            <Tags key={tag}>{tag}</Tags>
          ))}
        </TagsWrapper>

        <Title>{coffee.title}</Title>
        <Description>{coffee.description}</Description>

        <BuyContainer>
          <CoffeeValue>
            <span>R$</span>
            <p>{coffeeValue}</p>
          </CoffeeValue>
          <AmountSelector
            amount={amount}
            onDecreaseAmount={handleDecreaseAmount}
            onIncreaseAmount={handleIncreaseAmount}
          />
          <AddToCartButton onClick={handleAddToCart}>
            <ShoppingCart size={24} weight="fill" />
          </AddToCartButton>
        </BuyContainer>
      </div>
    </Card>
  )
}
