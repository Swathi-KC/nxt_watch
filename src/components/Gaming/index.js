import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GiGamepad} from 'react-icons/gi'
import Sidebar from '../Sidebar'
import Header from '../Header'
import GamingVideosCard from '../GamingVideosCard'

import ThemeContext from '../../context/ThemeContext'

import {
  MainGamingContainer,
  MainContainer,
  SidebarCont,
  GamingContainer,
  GamingMenuContainer,
  IconContainer,
  MenuHeading,
  FailureContainer,
  FailureImage,
  FailureText,
  RetryButton,
  LoaderContainer,
  VideosListCont,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosList: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamingSuccessView = () => {
    const {videosList} = this.state

    return (
      <VideosListCont>
        {videosList.map(eachVideo => (
          <GamingVideosCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosListCont>
    )
  }

  renderGamingFailureView = () => (
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
              again
            </FailureText>
            <RetryButton type="button" onClick={this.getGamingVideos}>
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

  renderRespectiveGamingVideoView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamingSuccessView()
      case apiStatusConstants.failure:
        return this.renderGamingFailureView()
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
            <MainGamingContainer data-testid="trending" theme={theme}>
              <Header />
              <MainContainer>
                <SidebarCont>
                  <Sidebar />
                </SidebarCont>
                <GamingContainer>
                  <GamingMenuContainer theme={theme}>
                    <IconContainer theme={theme}>
                      <GiGamepad size={40} color="#ff0b37" />
                    </IconContainer>
                    <MenuHeading theme={theme}>Gaming</MenuHeading>
                  </GamingMenuContainer>
                  {this.renderRespectiveGamingVideoView()}
                </GamingContainer>
              </MainContainer>
            </MainGamingContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
