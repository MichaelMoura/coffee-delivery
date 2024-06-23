import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  gap: 1rem;
  background-color: ${({ theme }) => theme['base-card']};

  padding: 0 3.5rem 1.5rem 3.5rem;
  border-radius: 5px 40px 5px 40px;
`

export const Image = styled.img`
  margin-top: -2rem;
  width: 8rem;
`

export const TagsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 0.5rem;
`

export const Tags = styled.span`
  background-color: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};

  padding: 0.25rem 0.5rem;
  border-radius: 15px;

  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.5rem 0;
`

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  color: ${({ theme }) => theme['text-primary']};

  line-height: 1.5rem;

  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  text-align: center;
  line-height: 1.5rem;
  height: 8rem;
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
`

export const CoffeeValue = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;

  gap: 0.25rem;
  color: ${(props) => props.theme['base-text']};

  p {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
    font-family: 'Baloo 2', sans-serif;
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 0;
  padding: 0.5rem;
  border: 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme['purple-dark']};
  color: ${({ theme }) => theme.white};

  transition: background-color 0.2s;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.purple};
  }
`
