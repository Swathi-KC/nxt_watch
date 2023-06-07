import styled from 'styled-components'

export const GamingCardContainer = styled.li`
  width: 40%;
  margin: 10px;
  @media screen and (min-width: 576px) {
    width: 25%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const GamingCardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const VideoView = styled.p`
  color: #475569;
  font-size: 14px;
  text-decoration: none;
  margin-right: 5px;

  &:active {
    text-decoration: none;
  }
`
