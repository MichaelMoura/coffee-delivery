import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    margin: 0 auto;

    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']}; 
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
 

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', sans-serif;
    color: ${({ theme }) => theme['base-title']};
  }

  p, span, input{
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme['base-label']};
  }


`
