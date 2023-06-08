// import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import {
  TrendingCardContainer,
  TrendingCardView,
  ThumbnailImage,
  TrendingCardContentContainer,
  ChannelLogo,
  TrendingContentContainer,
  VideoTitle,
  VideoInfoCont,
  VideoName,
  VideoPostCont,
  VideoView,
  VideoPostedAt,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

const TrendingVideosCard = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    viewCount,
    title,
    id,
    publishedAt,
  } = videoDetails
  const {name, profileImageUrl} = channel
  //   let videoPostedAt = formatDistanceToNow(new Date(publishedAt))
  //   const videoPostedAtList = videoPostedAt.split(' ')
  //     console.log(videoPostedAtList)
  //   if (videoPostedAtList.length === 3) {
  //     videoPostedAtList.shift()
  //     console.log(videoPostedAtList)
  //     videoPostedAt = videoPostedAtList.join(' ')
  //   }
  //     console.log(videoPostedAt)
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
                <TrendingCardContainer>
                  <Link
                    to={`/videos/${id}`}
                    className="link-item"
                    onClick={() => changeActiveMenu('INITIAL')}
                  >
                    <TrendingCardView>
                      <ThumbnailImage
                        src={thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <TrendingCardContentContainer>
                        <div>
                          <ChannelLogo
                            src={profileImageUrl}
                            alt="channel logo"
                          />
                        </div>
                        <TrendingContentContainer>
                          <VideoTitle theme={theme}>{title}</VideoTitle>
                          <VideoInfoCont>
                            <VideoName>{name}</VideoName>
                            <VideoPostCont>
                              <VideoView>{viewCount} views</VideoView>
                              <VideoPostedAt as="p">
                                {publishedAt} ago
                              </VideoPostedAt>
                            </VideoPostCont>
                          </VideoInfoCont>
                        </TrendingContentContainer>
                      </TrendingCardContentContainer>
                    </TrendingCardView>
                  </Link>
                </TrendingCardContainer>
              )
            }}
          </ActiveMenuContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingVideosCard
