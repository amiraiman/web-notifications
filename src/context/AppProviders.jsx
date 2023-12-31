import PropTypes from 'prop-types'
import { ThemeProvider } from './ThemeProvider'

export const AppProviders = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

AppProviders.propTypes = {
  children: PropTypes.any,
}
