import Header from '../Header'
import Sidebar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'

import {
  MainContainer,
  SidebarCont,
  NotFoundContainer,
  NotFoundImage,
  NotFoundText,
  NotFoundSubText,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const theme = isDarkTheme ? 'dark' : 'light'

      const imgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <div>
          <Header />
          <MainContainer theme={theme}>
            <SidebarCont>
              <Sidebar />
            </SidebarCont>
            <NotFoundContainer theme={theme}>
              <NotFoundImage src={imgUrl} alt="not found" />
              <NotFoundText theme={theme}>Page Not Found</NotFoundText>
              <NotFoundSubText theme={theme}>
                we are sorry, the page you requested could not be found.
              </NotFoundSubText>
            </NotFoundContainer>
          </MainContainer>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
