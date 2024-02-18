
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;  
  gap: 8px;

  width: fit-content;
  
  font-family: 'Roboto Slab', serif;
  font-size: 16px;    
  font-weight: 400;
  color: ${({ theme}) => theme.COLORS.PINK};
  background-color: transparent;

  cursor: pointer;
`;