import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  Banner,
  CoffeeList,
  HomeContainer,
  ImgWrapper,
  ItemWrapper,
} from './styles'
import { CircleInfo } from './components/CircleInfo'
import CoffeeBanner from '../../assets/CoffeeBanner.svg'
import coffees from '../../mock/coffees.json'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Home() {
  return (
    <HomeContainer>
      <Banner>
        <div className="intro">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ItemWrapper>
            <CircleInfo
              color="yellowDark"
              icon={ShoppingCart}
              text="Compra simples e segura"
            />
            <CircleInfo
              color="gray"
              icon={Package}
              text="Embalagem mantém o café intacto"
            />

            <CircleInfo
              color="yellow"
              icon={Timer}
              text="Entrega rápida e rastreada"
            />

            <CircleInfo
              color="purple"
              icon={Coffee}
              text="O café chega fresquinho até você"
            />
          </ItemWrapper>
        </div>
        <ImgWrapper>
          <img src={CoffeeBanner} alt="Banner do site" />
        </ImgWrapper>
      </Banner>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </HomeContainer>
  )
}
