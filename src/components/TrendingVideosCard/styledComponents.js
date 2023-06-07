import styled from 'styled-components'

export const TrendingCardContainer = styled.li`
  width: 100%;
`
export const TrendingCardView = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const TrendingCardContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const ChannelLogo = styled.img`
  width: 40px;
  margin-right: 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TrendingContentContainer = styled.div`
  margin-left: 5px;
`

export const VideoTitle = styled.p`
  color: ${props => (props.theme === 'dark' ? 'white' : ' #424242')};
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
`
