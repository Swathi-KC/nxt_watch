import {Component} from 'react'
import Cookies from 'js-cookie'

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
  VideosListCont,
} from './styledComponents'
import {CloseButton} from '../Header/styledComponents'

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
      <CloseButton data-testid="close" onClick={this.onClickCloseBanner}>
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

  renderVideosListView = () => {
    const {videosList} = this.state
    return (
      <VideosListCont>
        {videosList.map(eachVideo => (
          <VideosCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </VideosListCont>
    )
  }

  renderRespectiveHomeVideoView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
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
            <HomeMainContainer theme={theme}>
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
                    >
                      <BsSearch size={18} color={color} />
                    </SearchButton>
                  </SearchContainer>
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
