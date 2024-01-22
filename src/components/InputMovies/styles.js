import styled from "styled-components";

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;

  width: 100%;
  height: 55px;
  padding: 18px 16px;
  border-radius: 10px;
  
  color: ${({ theme}) => theme.COLORS.GRAY_200};
  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_600};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  &:hover {
    filter: brightness(1.2);    
  }
`;