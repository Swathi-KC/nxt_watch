import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import ThemeContext from './context/ThemeContext'
import ActiveMenuContext from './context/ActiveMenuContext'
import SavedVideosContext from './context/SavedVideosContext'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

// Replace your code here

class App extends Component {
  state = {
    isDarkTheme: false,
    activeMenu: activeMenuConstants.home,
    saved: false,
    savedVideosList: [],
  }

  addVideosToSavedList = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  deleteVideosFromSavedList = videoDetails => {
    const {savedVideosList} = this.state
    const updatedVideosList = savedVideosList.filter(
      eachVideo => eachVideo.id !== videoDetails.id,
    )
    this.setState({savedVideosList: updatedVideosList})
  }

  updateSaveStatus = videoDetails => {
    this.setState(
      prevState => ({saved: !prevState.saved}),
      this.updateSaveVideosList(videoDetails),
    )
  }

  updateSaveVideosList = videoDetails => {
    const {saved} = this.state
    if (saved) {
      this.deleteVideosFromSavedList(videoDetails)
    } else {
      this.addVideosToSavedList(videoDetails)
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveMenu = value => {
    this.setState({activeMenu: value})
  }

  render() {
    const {isDarkTheme, activeMenu, saved, savedVideosList} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <SavedVideosContext.Provider
          value={{
            saved,
            savedVideosList,
            addVideosToSavedList: this.addVideosToSavedList,
            deleteVideosFromSavedList: this.deleteVideosFromSavedList,
            updateSaveStatus: this.updateSaveStatus,
          }}
        >
          <ActiveMenuContext.Provider
            value={{
              activeMenu,
              changeActiveMenu: this.changeActiveMenu,
            }}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </ActiveMenuContext.Provider>
        </SavedVideosContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
