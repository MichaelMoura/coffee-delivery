import styled from 'styled-components'

export const AmountSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme['base-button']};
  border-radius: 5px;

  padding: 0.5rem;

  span {
    color: ${({ theme }) => theme['base-title']};
  }
`

export const AmountButton = styled.button`
  background-color: transparent;
  border: 0;

  cursor: pointer;

  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.purple};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`
