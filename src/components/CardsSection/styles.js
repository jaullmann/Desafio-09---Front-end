import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 236px;
  padding: 32px;
  border-radius: 16px;

  text-align: left;

  background-color:  ${({ theme }) => theme.COLORS.DARK_BROWN};

  cursor: pointer;

  h2 {
    width: 100%;    

    font-family: 'Roboto Slab', serif;
    font-size: 24px;
    font-weight: 700;

    margin-bottom: 8px;

    color: ${({ theme }) => theme.COLORS.WHITE};    
  }

  > .card-buttons {
    position: absolute;
    top: 10px;
    right: 10px;
    margin: auto;
    display: flex;
    gap: 10px;
    z-index: 2;
  }

  > div:nth-child(3) {
    display: flex;
    gap: 6px;

    font-size: 12px;
    margin-right: 6px;

    margin-bottom: 15px;    

    > svg:nth-child(1) {
      color: ${({ theme }) => theme.COLORS.PINK}; 
      fill: ${({ theme, $score }) => Number($score) >= 1 ? theme.COLORS.PINK : 'none'}; 
    }
    > svg:nth-child(2) {
      color: ${({ theme }) => theme.COLORS.PINK}; 
      fill: ${({ theme, $score }) => Number($score) >= 2 ? theme.COLORS.PINK : 'none'}; 
    }
    > svg:nth-child(3) {
      color: ${({ theme }) => theme.COLORS.PINK}; 
      fill: ${({ theme, $score }) => Number($score) >= 3 ? theme.COLORS.PINK : 'none'}; 
    }
    > svg:nth-child(4) {
      color: ${({ theme }) => theme.COLORS.PINK}; 
      fill: ${({ theme, $score }) => Number($score) >= 4 ? theme.COLORS.PINK : 'none'}; 
    }
    > svg:nth-child(5) {
      color: ${({ theme }) => theme.COLORS.PINK}; 
      fill: ${({ theme, $score }) => Number($score) >= 5 ? theme.COLORS.PINK : 'none'}; 
    }
    
  }

  > #description {    
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    color: ${({ theme}) => theme.COLORS.GRAY_200};
        
    height: 60px;
    margin-bottom: 20px;

    overflow-y: hidden;
    white-space: pre-line;
    text-overflow: ellipsis;
  }

  > section {
    display: flex;    
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

    width: fit-content
  }
`;