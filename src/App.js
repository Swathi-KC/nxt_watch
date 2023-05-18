import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'
import ActiveMenuContext from './context/ActiveMenuContext'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'

const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

// Replace your code here

class App extends Component {
  state = {isDarkTheme: false, activeMenu: activeMenuConstants.home}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  changeActiveMenu = value => {
    this.setState({activeMenu: value})
  }

  render() {
    const {isDarkTheme, activeMenu} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
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
            <Route exact path="/" component={Home} />
          </Switch>
        </ActiveMenuContext.Provider>
      </ThemeContext.Provider>
    )
  }
}

export default App
