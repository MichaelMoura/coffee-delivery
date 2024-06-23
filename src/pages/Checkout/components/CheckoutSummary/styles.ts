import styled from 'styled-components'

export const CheckoutSummaryContainer = styled.div``

export const CheckoutBlock = styled.div`
  background: ${({ theme }) => theme['base-card']};
  display: flex;
  flex-direction: column;

  margin-top: 0.5rem;
  padding: 1.5rem 2.5rem;

  align-items: baseline;

  border-radius: 5px 40px 5px 40px;

  & + & {
    margin-top: 1rem;
  }
`

export const CoffeeList = styled.div`
  width: 100%;
`

export const CoffeeSummary = styled.div`
  width: 100%;

  /* margin-top: 2rem; */
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 1rem;
`

const BaseToal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3,
  span {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: 'Roboto';
    color: ${({ theme }) => theme['base-text']};
  }
`

export const SubTotal = styled(BaseToal)``

export const Total = styled(BaseToal)`
  h3,
  span {
    font-weight: bold;
    font-size: 1.25rem;
  }
`

export const CheckoutButton = styled.button`
  line-height: 0;
  padding: 1.5rem 2rem;

  border: 0;
  border-radius: 5px;

  cursor: pointer;

  color: ${({ theme }) => theme.white};

  background: ${({ theme }) => theme.yellow};

  a {
    color: ${({ theme }) => theme.white};
    font-weight: bold;

    font-size: 0.9rem;
    text-decoration: none;
  }

  transition: background-color 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme['base-hover']};
  }
`
