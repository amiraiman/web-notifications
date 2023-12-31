import PropTypes from 'prop-types'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#192424',
    800: '#223030',
    700: '#334848',
    600: '#445F5F',
    500: '#557777',
    400: '#668F8F',
    300: '#709999',
    200: '#88AAAA',
    100: '#A0BBBB',
    50: '#B7CCCC',
  },
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ colors, config })

export const ThemeProvider = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

ThemeProvider.propTypes = {
  children: PropTypes.any,
}
