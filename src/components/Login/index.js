import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  LoginFromContainer,
  FormContainer,
  WebsiteLogo,
  InputContainer,
  InputLabel,
  InputElement,
  CheckboxContainer,
  CheckboxElement,
  CheckboxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userDetails)}
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {
      showSubmitError,
      errorMsg,
      username,
      password,
      showPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const websiteLogoImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          const theme = isDarkTheme ? 'dark' : 'light'

          return (
            <LoginFromContainer theme={theme}>
              <FormContainer theme={theme}>
                <WebsiteLogo
                  src={websiteLogoImage}
                  className="login-website-logo-img"
                  alt="website logo"
                />
                <InputContainer className="input-container">
                  <InputLabel htmlFor="username" theme={theme}>
                    USERNAME
                  </InputLabel>
                  <InputElement
                    type="text"
                    id="username"
                    value={username}
                    className="input-field"
                    onChange={this.onChangeUsername}
                    placeholder="Username"
                  />
                </InputContainer>
                <InputContainer className="input-container">
                  <InputLabel htmlFor="password">PASSWORD</InputLabel>
                  <InputElement
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    className="input-field"
                    onChange={this.onChangePassword}
                    placeholder="Password"
                  />
                </InputContainer>

                <CheckboxContainer className="checkbox-cont">
                  <CheckboxElement
                    type="checkbox"
                    id="checkbox"
                    className="checkbox-ele"
                    checked={this.showPassword}
                    onChange={this.onChangeShowPassword}
                  />
                  <CheckboxLabel htmlFor="checkbox" theme={theme}>
                    Show Password
                  </CheckboxLabel>
                </CheckboxContainer>
                <LoginButton type="submit" className="login-button">
                  Login
                </LoginButton>

                {showSubmitError && (
                  <ErrorMessage className="error-message">
                    *{errorMsg}
                  </ErrorMessage>
                )}
              </FormContainer>
            </LoginFromContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Login