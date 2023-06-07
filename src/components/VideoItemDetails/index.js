import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddLine} from 'react-icons/ri'

import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'
import SavedVideosContext from '../../context/SavedVideosContext'

import {
  VideoDetailsContainer,
  VideoPlayerCont,
  VideoContentCont,
  VideoTitle,
  LikesAndPostedTimeCont,
  ViewsAndPostTimeCont,
  VideoInfoText,
  ReactButton,
  ChannelInfoCont,
  ChannelLogo,
  ChannelInfoText,
  ChannelInfoSubText,
  VideoDescriptionText,
  FailureContainer,
  FailureImage,
  FailureText,
  RetryButton,
  LoaderContainer,
  MainContainer,
  SidebarCont,
  VideoItemDetailsContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {videoDetails: data.video_details}
      const {videoDetails} = updatedData

      const updatedDetails = {
        id: videoDetails.id,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        thumbnailUrl: videoDetails.thumbnail_url,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
        viewCount: videoDetails.view_count,
        publishedAt: videoDetails.published_at,
        description: videoDetails.description,
      }
      this.setState({
        videoDetails: updatedDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateLikeStatus = () => {
    this.setState(prevState => ({like: !prevState.like, dislike: false}))
  }

  updateDislikeStatus = () => {
    this.setState(prevState => ({dislike: !prevState.dislike, like: false}))
  }

  renderSuccessVideoDetailsView = () => {
    const {videoDetails, like, dislike} = this.state

    const {
      id,
      title,
      publishedAt,
      videoUrl,
      viewCount,
      description,
      channel,
    } = videoDetails
    const {profileImageUrl, subscriberCount, name} = channel

    let videoPostedAt = formatDistanceToNow(new Date(publishedAt))
    const postedAtList = videoPostedAt.split()

    if (postedAtList.length === 3) {
      postedAtList.shift()
      videoPostedAt = postedAtList.join(' ')
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          const isLikeActive = like ? 'active' : 'inActive'
          const isDislikeActive = dislike ? 'active' : 'inActive'
          return (
            <VideoDetailsContainer theme={theme}>
              <VideoPlayerCont>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </VideoPlayerCont>
              <VideoContentCont>
                <VideoTitle theme={theme}>{title}</VideoTitle>
                <LikesAndPostedTimeCont>
                  <ViewsAndPostTimeCont>
                    <VideoInfoText>{viewCount} views</VideoInfoText>
                    <VideoInfoText>.{videoPostedAt} ago</VideoInfoText>
                  </ViewsAndPostTimeCont>
                  <div>
                    <ReactButton
                      type="button"
                      theme={isLikeActive}
                      onClick={this.updateLikeStatus}
                    >
                      <BiLike size={21} style={{paddingTop: '7px'}} />
                      Like
                    </ReactButton>
                    <ReactButton
                      type="button"
                      theme={isDislikeActive}
                      onClick={this.updateDislikeStatus}
                    >
                      <BiDislike size={21} style={{paddingTop: '7px'}} />
                      Dislike
                    </ReactButton>
                    <SavedVideosContext.Consumer>
                      {savedVideoValue => {
                        const {
                          updateSaveStatus,
                          savedVideosList,
                        } = savedVideoValue
                        const isContains = savedVideosList.find(
                          each => each.id === id,
                        )
                        const isSaveActive =
                          isContains !== undefined ? 'active' : 'inActive'
                        const saveText =
                          isContains !== undefined ? 'Saved' : 'Save'

                        return (
                          <ReactButton
                            type="button"
                            theme={isSaveActive}
                            onClick={() => updateSaveStatus(videoDetails)}
                          >
                            <RiPlayListAddLine
                              size={22}
                              style={{paddingTop: '5px'}}
                            />
                            {saveText}
                          </ReactButton>
                        )
                      }}
                    </SavedVideosContext.Consumer>
                  </div>
                </LikesAndPostedTimeCont>
                <hr />
                <ChannelInfoCont>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <div>
                    <ChannelInfoText theme={theme}>{name}</ChannelInfoText>
                    <ChannelInfoSubText>
                      {subscriberCount} subscribers
                    </ChannelInfoSubText>
                  </div>
                </ChannelInfoCont>
                <VideoDescriptionText theme={theme}>
                  {description}
                </VideoDescriptionText>
              </VideoContentCont>
            </VideoDetailsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderVideoDetailsFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureContainer>
            <FailureImage src={imageUrl} alt="failure view" />
            <FailureText theme={theme}>Oops! Something Went Wrong</FailureText>
            <FailureText theme={theme} as="p">
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <RetryButton type="button" onClick={this.getVideoDetails}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderRespectiveVideoDetailsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessVideoDetailsView()
      case apiStatusConstants.failure:
        return this.renderVideoDetailsFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          return (
            <div>
              <Header />
              <MainContainer>
                <SidebarCont>
                  <Sidebar />
                </SidebarCont>
                <VideoItemDetailsContainer
                  data-testid="videoItemDetails"
                  theme={theme}
                >
                  {this.renderRespectiveVideoDetailsView()}
                </VideoItemDetailsContainer>
              </MainContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
