import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled(Link)`

  display: flex;
  align-items: center;
  justify-content: center;      
  gap: 8px;

  height: 48px;
  width: 207px;
  border-radius: 10px;
    
  > svg {
    height: 22px;
    width: 22px;
  }

  color: ${({ theme }) => theme.COLORS.BLACK};
  background-color: ${({ theme }) => theme.COLORS.PINK};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  > button {
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.BLACK};
    background-color: transparent;
  }  
`;

export const Content = styled.main`
  margin-top: 50px;   

  h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 300px)
  }

  > #sub-header {
    margin-bottom: 40px;

    display: flex;
    justify-content: space-between;    

    h2 {
    font-family: "Roboto Slab", serif;
    font-size: 32px;
    font-weight: 400;
    }
  }  
`;
