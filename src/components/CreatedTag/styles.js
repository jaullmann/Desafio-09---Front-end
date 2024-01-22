import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  height: 54px;  
  padding: 16px;
  border-radius: 10px;

  font-size: 24px;  

  color: ${({ theme }) => theme.COLORS.PINK};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > p {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;  
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;