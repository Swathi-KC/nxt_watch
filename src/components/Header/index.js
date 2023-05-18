import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'

import {NavMobileContainer, HeaderLogoImg} from './styledComponents'
import ActiveMenuContext from '../../context/ActiveMenuContext'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const theme = isDarkTheme ? 'dark' : 'light'
      const color = isDarkTheme ? 'white' : 'black'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <>
          <NavMobileContainer>
            <ActiveMenuContext.Consumer>
              {activeMenuValue => {
                const {changeActiveMenu} = activeMenuValue
                return (
                  <Link to="/">
                    <HeaderLogoImg
                      src={websiteLogo}
                      alt="website logo"
                      onClick={() => changeActiveMenu('HOME')}
                    />
                  </Link>
                )
              }}
            </ActiveMenuContext.Consumer>
          </NavMobileContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
