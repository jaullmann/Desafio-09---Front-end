import styled from 'styled-components';

export const Container = styled.section`

  max-width: 1366px;  
  margin: auto;
  overflow-y: hidden;

  > div:nth-child(1) {
    margin-top: 40px;
    padding: 0 123px 40px
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;         
    padding: 0px 123px 30px;
    text-align: left; 
    


    > title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 19px;

      margin-bottom: 30px;

      > h1 {
        font-family: 'Roboto Slab', serif;
        font-size: 36px;
        font-weight: 500;    

        color: ${({ theme }) => theme.COLORS.WHITE};    
      }

      > div {
        display: flex;
        gap: 10px;      
        
        font-size: 20px;

        color: ${({ theme }) => theme.COLORS.PINK}; 

        > svg:nth-child(1) {
          color: ${({ theme }) => theme.COLORS.PINK}; 
          fill: ${({ theme, $score }) => Number($score) >= 1 ? theme.COLORS.PINK : 'none'}; 
          cursor: pointer;
        }
        > svg:nth-child(2) {
          color: ${({ theme }) => theme.COLORS.PINK}; 
          fill: ${({ theme, $score }) => Number($score) >= 2 ? theme.COLORS.PINK : 'none'};
          cursor: pointer; 
        }
        > svg:nth-child(3) {
          color: ${({ theme }) => theme.COLORS.PINK}; 
          fill: ${({ theme, $score }) => Number($score) >= 3 ? theme.COLORS.PINK : 'none'};
          cursor: pointer; 
        }
        > svg:nth-child(4) {
          color: ${({ theme }) => theme.COLORS.PINK}; 
          fill: ${({ theme, $score }) => Number($score) >= 4 ? theme.COLORS.PINK : 'none'};
          cursor: pointer; 
        }
        > svg:nth-child(5) {
          color: ${({ theme }) => theme.COLORS.PINK}; 
          fill: ${({ theme, $score }) => Number($score) >= 5 ? theme.COLORS.PINK : 'none'}; 
          cursor: pointer;
        }    
      }

    }

    > div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;

      margin-bottom: 40px;

      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 400; 
      
      color: ${({ theme }) => theme.COLORS.WHITE}; 

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%; 
      }

      > svg {
        color: ${({ theme }) => theme.COLORS.PINK}; 
      }
    }

    > section {
      display: flex;    
      justify-content: flex-start;
      align-items: center;
      gap: 8px;

      width: fit-content;

      margin-bottom: 40px;
    }

    > article {    
      font-family: 'Roboto Slab', serif;
      font-size: 16px;    
      font-weight: 400;
      line-height: normal;
      text-align: justify;     
    }
  } 
  
`;