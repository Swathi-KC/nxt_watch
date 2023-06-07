import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
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

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  flex-grow: 1;
  padding: 15px;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const NotFoundImage = styled.img`
  width: 80%;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const NotFoundText = styled.h1`
  margin: 0px;
  padding: 5px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : ' #231f20')};
`
export const NotFoundSubText = styled.p`
  margin: 0px;
  padding: 5px;
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? ' #616e7c' : ' #231f20')};
`
