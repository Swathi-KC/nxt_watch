import styled from 'styled-components'

export const LoginFromContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-size: cover;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  padding: 20px;
  background-color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  box-shadow: 0px 0px 5px #00000050;
  @media screen and (min-width: 768px) {
    max-width: 25%;
    max-width: 30%;
  }
`

export const WebsiteLogo = styled.img`
  max-width: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`

export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  line-height: 1;
  margin-bottom: 10px;
  color: ${props => (props.theme === 'dark' ? '#f1f1f1' : '#475569')};
`

export const InputElement = styled.input`
  height: 35px;
  border: 1px #cbd5e1 solid;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: transparent;
  padding: 5px;
  color: #64748b;
  outline: none;
  cursor: pointer;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-left: 5%;
`

export const CheckboxElement = styled.input`
  width: 15px;
  height: 15px;
`
export const CheckboxLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto';
  line-height: 1;
  margin-left: 2px;
  color: ${props => (props.theme === 'dark' ? '#f1f1f1' : '#181818')};
`
export const LoginButton = styled.button`
  width: 90%;
  height: 35px;
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  outline: none;
  margin-top: 6px;
`
export const ErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-family: 'Roboto';
  line-height: 1;
  color: #ff0b37;
`
