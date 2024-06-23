import styled from 'styled-components'

export const RemoveCoffeeButtonContainer = styled.button`
  line-height: 0;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  background-color: ${({ theme }) => theme['base-button']};
  border: 0;
  border-radius: 5px;

  color: ${({ theme }) => theme['base-text']};
  font-size: 0.8rem;
  font-weight: 500;

  padding: 0.45rem 0.5rem;

  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme['base-hover']};
  }

  svg {
    color: ${({ theme }) => theme.purple};
  }
`
