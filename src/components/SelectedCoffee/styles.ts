import styled from 'styled-components'

export const CoffeeItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;

  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  img {
    width: 4rem;
    height: 4rem;
  }

  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme['base-text']};
    font-weight: bold;
  }
`

export const CoffeeInfos = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme['base-subtitle']};
    font-family: 'Roboto';
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
