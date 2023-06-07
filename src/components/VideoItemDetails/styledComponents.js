import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
`
export const FailureImage = styled.img`
  width: 80%;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const FailureText = styled.h1`
  margin: 0px;
  padding: 5px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : ' #231f20')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
`

export const LoaderContainer = styled(FailureContainer)`
  text-align: center;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const SidebarCont = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const VideoItemDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  overflow-x: auto;
  flex-grow: 1;
  padding: 25px;
  @media screen and (max-width: 768px) {
    min-height: 100vh;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const VideoPlayerCont = styled.div`
  width: 100%;
  height: 40vh;
  @media screen and (min-width: 768px) {
    height: 60vh;
  }
`

export const VideoContentCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f1f1f1' : ' #424242')};
  font-weight: 500;
  margin-top: 5px;
  font-size: 16px;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
`

export const LikesAndPostedTimeCont = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
  }
`

export const ViewsAndPostTimeCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const VideoInfoText = styled.p`
  color: #475569;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 400;
  text-decoration: none;
`

export const ReactButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
`
export const ChannelInfoCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
`

export const ChannelLogo = styled.img`
  width: 50px;
  margin-right: 10px;
`

export const ChannelInfoText = styled.p`
  color: ${props => (props.theme === 'dark' ? '#2563eb' : '#64748b')};
  margin: 0px;
  font-size: 16px;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
`

export const ChannelInfoSubText = styled.p`
  margin: 0px;
  color: #475569;
  font-size: 16px;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
`
export const VideoDescriptionText = styled.p`
  width: 100%;
  padding: 10px;
  color: ${props => (props.theme === 'dark' ? '#f1f1f1' : ' #424242')};
  margin: 0px;
  font-size: 16px;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
`
