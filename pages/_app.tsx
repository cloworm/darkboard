import React, { FunctionComponent } from 'react'
import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'

import { BoardProvider } from '../shared/state/board'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#dffef7',
      100: '#b7f7e7',
      200: '#8ef1d8',
      300: '#63ebc8',
      400: '#3de5ba',
      500: '#27cba0',
      600: '#1a9f7c',
      700: '#0e7158',
      800: '#014435',
      900: '#001911'
    }
  },
  fonts: {
    heading: '"Noto Sans JP", sans-serif',
    body: '"Noto Sans JP", sans-serif',
  },
})

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <BoardProvider>
      <ChakraProvider theme ={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </BoardProvider>
  )
}

export default MyApp
