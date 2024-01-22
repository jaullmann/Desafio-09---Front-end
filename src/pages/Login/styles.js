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
  
  /* padding-right: 163px; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  
  text-align: left;

  > div:nth-child(2) {
    width: 340px;

    margin-top: 48px;
    margin-bottom: 8px;    
  } 
  
  > div:nth-child(3) {
    width: 340px;
  }  

  > button {
    margin-top: 16px;
    width: 340px;
  }
  
  a {
    margin-top: 42px;

    font-family: "Roboto Slab", serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: ${({ theme}) => theme.COLORS.PINK};
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
