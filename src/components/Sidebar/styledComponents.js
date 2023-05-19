import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  min-height: 100vh;
`
export const ContactUsCont = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactUsText = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  font-size: 20px;
  font-weight: 500;
  font-family: 'Roboto';
  line-height: 1.2;
`
export const ContactUsIcon = styled.img`
  max-width: 50px;
  margin-left: 10px;
  margin-right: 10px;
`
