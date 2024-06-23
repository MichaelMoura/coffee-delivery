import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Banner from '../../assets/BannerSucess.svg'
import { CircleInfo } from '../Home/components/CircleInfo'
import {
  SuccessContainer,
  BannerInfos,
  BannerHeader,
  BannerSummary,
  BannerImage,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <BannerInfos>
        <BannerHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </BannerHeader>
        <BannerSummary>
          <CircleInfo
            color="purple"
            icon={MapPin}
            text={
              <p>
                Entrega em <b>Rua João Daniel Martinelli, 102</b>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            }
          />
          <CircleInfo
            color="yellow"
            icon={Timer}
            text={
              <p>
                Previsão de entrega
                <br />
                <b>20 min - 30 min</b>
              </p>
            }
          />

          <CircleInfo
            color="yellowDark"
            icon={CurrencyDollar}
            text={
              <p>
                Pagamento na entrega <br /> <b>Cartão de Crédito</b>
              </p>
            }
          />
        </BannerSummary>
      </BannerInfos>

      <BannerImage>
        <img src={Banner} alt="" />
      </BannerImage>
    </SuccessContainer>
  )
}
