import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 99vh;
  
  max-width: 1366px;
  margin: auto;
  display: flex;
  align-items: stretch;
  
  overflow: hidden;
`;

export const Form = styled.form`  
  width: 683px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  
  text-align: left;

  > div:nth-child(2) {
    width: 340px;
    margin-top: 48px;    
  } 
  
  > div:nth-child(3) {
    width: 340px; 
  }  

  > div:nth-child(4) {
    width: 340px;
  }  

  > button {
    margin-top: 8px;
    width: 340px;
  }

  > a {
    margin-top: 42px;
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
