import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import Sidebar from '../Sidebar'
import VideosCard from '../VideosCard'

import ThemeContext from '../../context/ThemeContext'

import {
  HomeMainContainer,
  MainContainer,
  SidebarCont,
  HomeContainer,
  BannerContainer,
  BannerLogo,
  BannerText,
  BannerGetButton,
  SearchContainer,
  SearchInputElement,
  SearchButton,
  CloseButton,
  VideosListCont,
  NoVideosContainer,
  NoVideosImg,
  FailureText,
  RetryButton,
  FailureContainer,
  FailureImage,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
    videosList: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        publishedAt: eachVideo.published_at,
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

  onClickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderPopupBanner = () => (
    <BannerContainer data-testid="banner">
      <CloseButton
        data-testid="close"
        onClick={this.onClickCloseBanner}
        type="button"
      >
        <IoMdClose size={20} />
      </CloseButton>
      <BannerLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <BannerText>Buy Nxt Watch Premium prepaid plans with UPI</BannerText>
      <BannerGetButton type="button">GET IT NOW</BannerGetButton>
    </BannerContainer>
  )

  renderNoVideosView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureText theme={theme}>No search results found</FailureText>
            <FailureText theme={theme} as="p">
              Try different key words or remove search filter
            </FailureText>
            <RetryButton type="button" onClick={this.getHomeVideos}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderSuccessVideosListView = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoVideosView()
    }
    return (
      <VideosListCont>
        {videosList.map(eachVideo => (
          <VideosCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosListCont>
    )
  }

  renderHomeFailureView = () => (
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
            <RetryButton type="button" onClick={this.getHomeVideos}>
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

  renderRespectiveHomeVideoView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessVideosListView()
      case apiStatusConstants.failure:
        return this.renderHomeFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchInput} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const theme = isDarkTheme ? 'dark' : 'light'
          const color = isDarkTheme ? '#f9f9f9' : '#181818'
          return (
            <HomeMainContainer data-testid="home" theme={theme}>
              <Header />
              <MainContainer>
                <SidebarCont>
                  <Sidebar />
                </SidebarCont>
                <HomeContainer>
                  {showBanner && this.renderPopupBanner()}
                  <SearchContainer>
                    <SearchInputElement
                      type="search"
                      placeholder="Search"
                      theme={theme}
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchButton
                      type="button"
                      theme={theme}
                      data-testid="searchButton"
                      onClick={this.getHomeVideos}
                    >
                      <BsSearch size={18} color={color} />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderRespectiveHomeVideoView()}
                </HomeContainer>
              </MainContainer>
            </HomeMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
