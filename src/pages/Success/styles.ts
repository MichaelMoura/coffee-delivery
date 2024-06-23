import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  justify-content: space-between;
`

export const BannerInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const BannerHeader = styled.div`
  h1 {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1.1rem;
  }
`

export const BannerSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const BannerImage = styled.div`
  display: flex;

  img {
    flex: 1;
  }
`
