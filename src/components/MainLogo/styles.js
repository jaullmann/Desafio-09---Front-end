import styled from 'styled-components';

export const Container = styled.div`
  width: 343px;

  font-family: 'Roboto Slab', serif;
  text-align: left;

  > h1 {
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};    
  }

  > p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};    
  }

  > h3 {
    margin-top: 48px;

    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};    
  }
  
`;