import styled from 'styled-components'

export const NavMobileContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#f4f4f4'};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeaderLogoImg = styled.img`
  max-width: 160px;
  padding-left: 20px;
`
export const NavMobileIconCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
`

export const MenuPopupMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
export const CloseButton = styled.div`
  align-self: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`

export const MenuListMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
`
export const LogoutPopupCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  border-radius: 8px;
  width: 100%;
  height: 100%;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
`
export const LogoutText = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : ' #00306e')};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  line-height: 1.2;
`
export const PopupButton = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : props.bgColor)};
  color: ${props => (props.outline ? '#94a3b8' : '#f9f9f9')};
  border: ${props => (props.outline ? '1px #94a3b8 solid' : 'none')};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  height: 30px;
  margin: 5px;
  min-width: 60px;
  max-width: 70px;
`
export const NavLargeContainer = styled(NavMobileContainer)`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const NavLargeIconCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
export const ProfileIcon = styled.img`
  max-width: 50px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 5px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: ${props =>
    props.theme === 'dark' ? '1px #f9f9f9 solid' : ' 1px #3b82f6 solid'};
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  height: 30px;
  min-width: 70px;
  max-width: 80px;
  font-weight: 500;
  margin-right: 30px;
`
