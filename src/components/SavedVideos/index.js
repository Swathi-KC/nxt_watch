import {RiMenuAddLine} from 'react-icons/ri'

import Header from '../Header'
import Sidebar from '../Sidebar'

import TrendingVideosCard from '../TrendingVideosCard'

import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'

import {
  NoVideosContainer,
  NoVideosImg,
  FailureText,
  VideosList,
  SavedVideosMainContainer,
  MainContainer,
  SidebarCont,
  SavedVideosContainer,
  SavedMenuContainer,
  IconContainer,
  MenuHeading,
} from './styledComponents'

const SavedVideos = () => {
  const savedList = themeValue => {
    const {isDarkTheme} = themeValue
    const theme = isDarkTheme ? 'dark' : 'light'
    return (
      <SavedVideosContext.Consumer>
        {value => {
          const {savedVideosList} = value
          if (savedVideosList.length === 0) {
            return (
              <NoVideosContainer>
                <NoVideosImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                  alt="no saved videos"
                />
                <FailureText theme={theme}>No saved videos found</FailureText>
                <FailureText theme={theme} as="p">
                  You can save your videos while watching them
                </FailureText>
              </NoVideosContainer>
            )
          }
          return (
            <VideosList>
              {savedVideosList.map(each => (
                <TrendingVideosCard videoDetails={each} key={each.id} />
              ))}
            </VideosList>
          )
        }}
      </SavedVideosContext.Consumer>
    )
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <SavedVideosMainContainer data-testid="savedVideos" theme={theme}>
            <Header />
            <MainContainer>
              <SidebarCont>
                <Sidebar />
              </SidebarCont>
              <SavedVideosContainer>
                <SavedMenuContainer theme={theme}>
                  <IconContainer theme={theme}>
                    <RiMenuAddLine size={40} color="#ff0b37" />
                  </IconContainer>
                  <MenuHeading theme={theme}>Saved Videos</MenuHeading>
                </SavedMenuContainer>
                {savedList(value)}
              </SavedVideosContainer>
            </MainContainer>
          </SavedVideosMainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideos
