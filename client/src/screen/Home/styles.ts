import styled from 'styled-components'
import backgroundImage from '../../static/Background.png'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${backgroundImage});
  background-size: 100%;
  height: 100vh;
  width: 100vw;
`

export const BoxContent = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  width: 100%;
  margin: 40px 0;
  border-radius: 8px;
  padding: 16px;
  overflow-y: scroll;
`

export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;

  img {
    border: 2px solid #8f9bb3;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    padding: 5px;
    background-color: #f7f9fc;
  }
`
