import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 
  font-family: 'Roboto', sans-serif;
  font-size: 12px;  
  font-weight: 400;

  padding: auto;

  height: 24px;  
  margin: auto;

  padding: 8px 16px;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.DARK_BROWN};
  
  
`;