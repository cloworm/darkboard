import { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#dffef7',
      100: '#b7f7e7',
      200: '#8ef1d8',
      300: '#8ef1d8',
      400: '#8ef1d8',
      500: '#8ef1d8',
      600: '#63ebc8',
      700: '#3de4b9',
      800: '#28cba0',
      900: '#1a9f7b'
    }
  },
  fonts: {
    heading: '"Noto Sans JP", sans-serif',
    body: '"Noto Sans JP", sans-serif',
  },
})

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme ={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
