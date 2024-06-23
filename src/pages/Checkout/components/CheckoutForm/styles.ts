import styled from 'styled-components'
import { theme } from '../../../../styles/theme'

export const CheckoutFormContainer = styled.div``

export const CheckoutSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CheckoutBlock = styled.div`
  background: ${({ theme }) => theme['base-card']};

  margin-top: 0.5rem;
  padding: 2.5rem;

  border-radius: 5px;

  & + & {
    margin-top: 1rem;
  }
`

interface BlockHeaderProps {
  iconcolor: keyof typeof theme
}

export const BlockHeader = styled.div<BlockHeaderProps>`
  display: flex;
  gap: 1rem;
  align-items: baseline;

  svg {
    color: ${({ theme, iconcolor }) => theme[iconcolor]};
  }
`

export const BlockHeaderDescription = styled.div`
  margin-bottom: 2rem;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const FormContainer = styled.div`
  display: grid;
  grid-template-areas:
    'zipCode . .'
    'street street street'
    'number complement complement'
    'neighborhood city uf';
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px 12px;
`

export const BaseInput = styled.input`
  padding: 1rem;

  border: 1px solid ${({ theme }) => theme['base-button']};
  background-color: ${({ theme }) => theme['base-input']};
  border-radius: 5px;

  color: ${({ theme }) => theme['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['yellow-dark']};
  }
`

export const Input = styled(BaseInput)`
  grid-area: ${(props) => props.name};

  ${(props) => {
    if (props.name === 'complement') {
      return '&::after { content: " (opcional)"; font-size: 0.8rem; color: #ccc; }'
    }
  }}/* margin-bottom: 1rem; */
`

export const PaymentMethodContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`

export const PaymentMethod = styled.label`
  cursor: pointer;

  border: 0;
  line-height: 0;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme['base-button']};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }

  input {
    display: none;
  }

  label {
    font-family: 'Roboto';
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
    display: block;
  }
`
