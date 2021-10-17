import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'
import colors from './colors'
 
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    background-position: center center;
    backgorund-size: cover;
    background-attachment: fixed;

    & > div {
        background-color: ${rgba(colors.primaryColor, .5)};
        min-height: 100vh;
    }
  }
`;
 
export default GlobalStyle;