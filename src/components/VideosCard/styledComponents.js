import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 50%;
    padding: 5px;
    height: 350px;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
    padding: 5px;
    height: 100%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoCardContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px;
  text-decoration: none;
`

export const ChannelLogo = styled.img`
  width: 40px;
`

export const VideoContentContainer = styled.div`
  margin-left: 5px;
`

export const VideoTitle = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f1f1f1' : ' #424242')};
  margin: 0px;
  font-size: 16px;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
`
export const VideoInfoCont = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 567px) {
    flex-direction: column;
  }
`
export const VideoName = styled.p`
  color: #475569;
  font-size: 14px;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
`
export const VideoPostCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const VideoView = styled.p`
  color: #475569;
  font-size: 14px;
  text-decoration: none;
  margin-right: 5px;

  &:active {
    text-decoration: none;
  }
`

export const VideoPostedAt = styled.p`
  color: #475569;
  font-size: 14px;
  text-decoration: none;
  margin-left: 5px;
  &:active {
    text-decoration: none;
  }
`
