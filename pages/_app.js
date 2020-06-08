import '../main.css'

import customTheme from '../theme'
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'
import { StoreProvider } from 'easy-peasy';
import store from '../store/index'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider >

      <CSSReset />

      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>

    </ThemeProvider>
  )
}

export default MyApp