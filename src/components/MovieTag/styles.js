import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  font-family: 'Roboto', sans-serif;
  font-size: 16px;  
  font-weight: 400;
  
  height: 56px;
  width: auto;

  padding: 16px;
  border-radius: 10px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > svg {
    font-size: 24px;  
    color: ${({ theme }) => theme.COLORS.PINK};
    background-color: transparent;
    cursor: pointer;
  }
`;