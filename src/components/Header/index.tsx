import { ShoppingCart } from 'phosphor-react'
import logo from '../../assets/LogoHeader.svg'
import { Cart, HeaderContainer, Location, LocationPin } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'

export function Header() {
  const { cart } = useContext(CartContext)

  const coffeeInCart = cart.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <div className="cart-container">
        <Location>
          <LocationPin size={18} weight="fill" />
          <span>São Paulo, SP</span>
        </Location>
        <NavLink to="/cart">
          <Cart>
            <ShoppingCart size={18} weight="fill" />
            {coffeeInCart > 0 && <span className="qty">{coffeeInCart}</span>}
          </Cart>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
