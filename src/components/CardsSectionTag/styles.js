import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;  
  font-weight: 400;

  height: 24px;  

  padding: 5px 16px;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;