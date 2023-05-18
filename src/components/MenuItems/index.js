import {Link} from 'react-router-dom'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {GiGamepad} from 'react-icons/gi'
import {MdPlaylistAdd} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

import {MenuListContainer, MenuLink, MenuName} from './styledComponents'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const MenuItems = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      return (
        <ActiveMenuContext.Consumer>
          {activeMenuValue => {
            const {activeMenu, changeActiveMenu} = activeMenuValue
            const iconColor = isDarkTheme ? '#424242' : '#7e858e'
            const iconActive = '#ff0b37'
            return (
              <MenuListContainer>
                <Link to="/">
                  <MenuLink
                    theme={theme}
                    key="HOME"
                    isActive={activeMenu === activeMenuConstants.home}
                    onClick={() => changeActiveMenu(activeMenuConstants.home)}
                  >
                    <AiFillHome
                      color={
                        activeMenu === activeMenuConstants.home
                          ? iconActive
                          : iconColor
                      }
                      size={22}
                    />
                    <MenuName theme={theme}>Home</MenuName>
                  </MenuLink>
                </Link>
                <Link to="/trending">
                  <MenuLink
                    theme={theme}
                    key="TRENDING"
                    isActive={activeMenu === activeMenuConstants.trending}
                    onClick={() =>
                      changeActiveMenu(activeMenuConstants.trending)
                    }
                  >
                    <AiFillFire
                      color={
                        activeMenu === activeMenuConstants.trending
                          ? iconActive
                          : iconColor
                      }
                      size={22}
                    />
                    <MenuName theme={theme}>Trending</MenuName>
                  </MenuLink>
                </Link>
                <Link to="/gaming">
                  <MenuLink
                    theme={theme}
                    key="GAMING"
                    isActive={activeMenu === activeMenuConstants.gaming}
                    onClick={() => changeActiveMenu(activeMenuConstants.gaming)}
                  >
                    <GiGamepad
                      color={
                        activeMenu === activeMenuConstants.gaming
                          ? iconActive
                          : iconColor
                      }
                      size={22}
                    />
                    <MenuName theme={theme}>Gaming</MenuName>
                  </MenuLink>
                </Link>

                <Link to="/saved-videos">
                  <MenuLink
                    theme={theme}
                    key="SAVED_VIDEOS"
                    isActive={activeMenu === activeMenuConstants.savedVideos}
                    onClick={() =>
                      changeActiveMenu(activeMenuConstants.savedVideos)
                    }
                  >
                    <MdPlaylistAdd
                      color={
                        activeMenu === activeMenuConstants.savedVideos
                          ? iconActive
                          : iconColor
                      }
                      size={22}
                    />
                    <MenuName theme={theme}>Saved videos</MenuName>
                  </MenuLink>
                </Link>
              </MenuListContainer>
            )
          }}
        </ActiveMenuContext.Consumer>
      )
    }}
  </ThemeContext.Consumer>
)

export default MenuItems
