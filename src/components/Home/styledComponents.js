import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f1f1f1'};
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

export const HomeContainer = styled.div`
  height: 100%;
  overflow-x: auto;
  flex-grow: 1;
  padding: 15px;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  max-width: 100%;
  padding-left: 20px;
  padding-bottom: 20px;
  margin-left: 0;
`
export const BannerLogo = styled.img`
  max-width: 130px;
`
export const BannerText = styled.p`
  color: #212121;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 1.2;
`
export const BannerGetButton = styled.button`
  outline: none;
  background-color: transparent;
  border: 1px #212121 solid;
  border-radius: 2px;
  height: 30px;
  min-width: 100px;
  max-width: 110px;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: 1px #909090 solid;
  border-radius: 4px;
  margin-top: 15px;
  margin-bottom: 10px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchInputElement = styled.input`
  background-color: ${props =>
    props.theme === 'dark' ? ' #0f0f0f' : '#f9f9f9'};
  border: none;
  outline: none;
  cursor: pointer;
  color: #616e7c;
  height: 100%;
  min-width: 90%;
`
export const SearchButton = styled.button`
  background-color: ${props =>
    props.theme === 'dark' ? '#231f20' : '  #ebebeb'};
  height: 99%;
  min-width: 10%;
  border: none;
`

export const VideosListCont = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 95%;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
`
export const NoVideosImg = styled.img`
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

export const FailureContainer = styled(NoVideosContainer)``

export const FailureImage = styled(NoVideosImg)``

export const LoaderContainer = styled(NoVideosContainer)`
  text-align: center;
`
