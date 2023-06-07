import {Link} from 'react-router-dom'

import {
  GamingCardContainer,
  ThumbnailImage,
  GamingCardContentContainer,
  VideoTitle,
  VideoView,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

const GamingVideosCard = props => {
  const {videoDetails} = props
  const {thumbnailUrl, viewCount, title, id} = videoDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <ActiveMenuContext.Consumer>
            {activeMenuValue => {
              const {changeActiveMenu} = activeMenuValue
              return (
                <GamingCardContainer>
                  <Link
                    to={`/videos/${id}`}
                    className="link-item"
                    onClick={() => changeActiveMenu('INITIAL')}
                  >
                    <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                    <GamingCardContentContainer>
                      <VideoTitle theme={theme}>{title}</VideoTitle>
                      <VideoView>{viewCount} Watching Worldwide</VideoView>
                    </GamingCardContentContainer>
                  </Link>
                </GamingCardContainer>
              )
            }}
          </ActiveMenuContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingVideosCard
