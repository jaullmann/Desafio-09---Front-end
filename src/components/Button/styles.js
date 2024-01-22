import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme}) => theme.COLORS.PINK};
  color: ${({ theme}) => theme.COLORS.BLACK};

  cursor: pointer;

  &.dark-mode {
    background-color: ${({ theme}) => theme.COLORS.BLACK};
    color: ${({ theme}) => theme.COLORS.PINK};
  }
    
  height: 56px;
  border: 0;
  padding: 16px 0;  
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }  
`;