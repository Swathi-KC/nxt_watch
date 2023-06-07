import styled from 'styled-components'

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
export const VideosList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 95%;
`

export const SavedVideosMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f1f1f1'};
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

export const SavedVideosContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  flex-grow: 1;
  padding: 15px;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const SavedMenuContainer = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${props =>
    props.theme === 'dark' ? '#231f20' : '#f9f9f9'};
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const IconContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#000000' : ' #e2e8f0'};
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  padding: 10px;
  text-align: center;
  margin: 10px;
`

export const MenuHeading = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`
