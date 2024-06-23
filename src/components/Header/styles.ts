import { MapPin } from 'phosphor-react'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  .cart-container {
    display: flex;
    gap: 0.5rem;
  }
`
export const Location = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 5px;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['purple-dark']};
  font-weight: 400;
`

export const LocationPin = styled(MapPin)`
  color: ${(props) => props.theme.purple};
`

export const Cart = styled.div`
  padding: 0.5rem;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme['yellow-dark']};

  position: relative;

  span {
    position: absolute;
    top: 0;
    right: 0;

    transform: translate(50%, -50%);

    font-size: 0.5rem;

    background-color: ${(props) => props.theme['yellow-dark']};
    border-radius: 50%;
    color: ${(props) => props.theme.white};

    width: 1rem;
    height: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
