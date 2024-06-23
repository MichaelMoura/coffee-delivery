import styled from 'styled-components'

export const HomeContainer = styled.div``

export const Banner = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 3rem 0;
`

export const ItemWrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export const ImgWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  img {
    width: 100%;
  }
`
export const CoffeeList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  padding: 3rem 0;
`
