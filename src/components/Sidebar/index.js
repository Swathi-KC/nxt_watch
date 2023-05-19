import ThemeContext from '../../context/ThemeContext'

import MenuItems from '../MenuItems'

import {
  SidebarContainer,
  ContactUsCont,
  ContactUsText,
  ContactUsIcon,
} from './styledComponents'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'
      return (
        <SidebarContainer theme={theme}>
          <MenuItems />
          <ContactUsCont>
            <ContactUsText theme={theme}>CONTACT US</ContactUsText>
            <div>
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt=" facebook logo"
              />
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ContactUsIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </div>
            <ContactUsText theme={theme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactUsText>
          </ContactUsCont>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default Sidebar
