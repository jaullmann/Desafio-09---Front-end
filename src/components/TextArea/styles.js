import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 275px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  resize: none;

  margin-bottom: 40px;
  border-radius: 10px;
  padding: 19px 16px;

  overflow-y: hidden;

  &:hover {
    filter: brightness(1.2);    
  }

  > textarea {
    width: 100%;
    height: 100%;
    
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
`;