import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled.header`

top: 0;
position: sticky;

width: 100%;
border-bottom: 1px solid ${({ theme}) => theme.COLORS.LIGHT_BROWN};

> div {
    height: 116px;  
    max-width: 1366px;
    margin: auto;

    background-color: ${({ theme}) => theme.COLORS.BACKGROUND_800};    

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;

    padding: 0 123px;

    > a {
      color: ${({ theme}) => theme.COLORS.PINK};
      font-family: 'Roboto Slab', serif;
      font-size: 24px;
      font-weight: 700;

      cursor: pointer;
    }
  }  
`;

export const Input = styled.input`
  font-family: 'Roboto Slab', serif;
  font-size: 14px;
  font-weight: 400;

  width: 100%;
  height: 55px;
  padding: 19px 24px;
  border-radius: 10px;
  
  color: ${({ theme}) => theme.COLORS.GRAY_200};
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};
  
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  &:hover {
    filter: brightness(1.2);    
  }
`;

export const Profile = styled(Link)`  
  height: 68px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 9px;

  > a img {
    width: 64px;
    height: 64px;
    border-radius: 50%; 
    
    cursor: pointer;
  }

  > div {    
    min-width: 125px;
    font-size: 14px;    

    display: flex;
    flex-direction: column;    
    text-align: right
  }

  strong {  
    color: ${({ theme}) => theme.COLORS.WHITE};
    font-weight: 700;

    cursor: pointer;
  }

  span {
    color: ${({ theme}) => theme.COLORS.GRAY_600};
    font-weight: 400;
    
    cursor: pointer;
  }

`;