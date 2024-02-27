import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;  
  height: 35px;
  width: 35px;
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;

  svg {
    color: white;
    font-size: 16px;
  }
`;