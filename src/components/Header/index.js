import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FiSun, FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import ThemeContext from '../../context/ThemeContext'
import MenuItems from '../MenuItems'

import {
  NavMobileContainer,
  HeaderLogoImg,
  NavMobileIconCont,
  IconButton,
  MenuPopupMobile,
  CloseButton,
  MenuListMobile,
  LogoutPopupCont,
  LogoutText,
  PopupButton,
  NavLargeContainer,
  NavLargeIconCont,
  ProfileIcon,
  LogoutButton,
} from './styledComponents'

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
          <NavMobileContainer theme={theme}>
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
            <NavMobileIconCont>
              <IconButton
                type="button"
                data-testid="theme"
                onClick={() => toggleTheme()}
              >
                {isDarkTheme ? (
                  <FiSun color="white" size={22} />
                ) : (
                  <FaMoon color="black" size={22} />
                )}
              </IconButton>
              <Popup
                modal
                trigger={
                  <IconButton type="button">
                    <GiHamburgerMenu size={22} color={color} />
                  </IconButton>
                }
                className="popup-content"
              >
                {close => (
                  <MenuPopupMobile theme={theme}>
                    <CloseButton>
                      <IconButton type="button" onClick={() => close()}>
                        <IoMdClose size={20} color={color} />
                      </IconButton>
                    </CloseButton>
                    <MenuListMobile>
                      <MenuItems />
                    </MenuListMobile>
                  </MenuPopupMobile>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <IconButton type="button">
                    <FiLogOut color={color} size={22} />
                  </IconButton>
                }
                className="popup-content"
              >
                {close => (
                  <LogoutPopupCont theme={theme}>
                    <LogoutText theme={theme}>
                      Are you sure you want to logout?
                    </LogoutText>
                    <div>
                      <PopupButton
                        outline
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton
                        type="button"
                        bgColor="#3b82f6"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </PopupButton>
                    </div>
                  </LogoutPopupCont>
                )}
              </Popup>
            </NavMobileIconCont>
          </NavMobileContainer>

          <NavLargeContainer theme={theme}>
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
            <NavLargeIconCont>
              <IconButton
                type="button"
                data-testid="theme"
                onClick={() => toggleTheme()}
              >
                {isDarkTheme ? (
                  <FiSun color="white" size={22} />
                ) : (
                  <FaMoon color="black" size={22} />
                )}
              </IconButton>

              <ProfileIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <Popup
                modal
                trigger={
                  <LogoutButton theme={theme} type="button">
                    Logout
                  </LogoutButton>
                }
                className="logout-popup"
              >
                {close => (
                  <LogoutPopupCont theme={theme}>
                    <LogoutText theme={theme}>
                      Are you sure you want to logout?
                    </LogoutText>
                    <div>
                      <PopupButton
                        outline
                        type="button"
                        onClick={() => close()}
                      >
                        Cancel
                      </PopupButton>
                      <PopupButton
                        type="button"
                        bgColor="#3b82f6"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </PopupButton>
                    </div>
                  </LogoutPopupCont>
                )}
              </Popup>
            </NavLargeIconCont>
          </NavLargeContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
