// import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'

import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardContentContainer,
  ChannelLogo,
  VideoContentContainer,
  VideoTitle,
  VideoInfoCont,
  VideoName,
  VideoPostCont,
  VideoView,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'
import ActiveMenuContext from '../../context/ActiveMenuContext'

const VideosCard = props => {
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
                <VideoCardContainer>
                  <Link
                    to={`/videos/${id}`}
                    className="link-item"
                    onClick={() => changeActiveMenu('INITIAL')}
                  >
                    <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                    <VideoCardContentContainer>
                      <div>
                        <ChannelLogo src={profileImageUrl} alt="channel logo" />
                      </div>
                      <VideoContentContainer>
                        <VideoTitle theme={theme}>{title}</VideoTitle>
                        <VideoInfoCont>
                          <VideoName>{name}</VideoName>
                          <VideoPostCont>
                            <VideoView>{viewCount} views</VideoView>
                            <VideoView as="p">. {publishedAt} ago</VideoView>
                          </VideoPostCont>
                        </VideoInfoCont>
                      </VideoContentContainer>
                    </VideoCardContentContainer>
                  </Link>
                </VideoCardContainer>
              )
            }}
          </ActiveMenuContext.Consumer>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideosCard
