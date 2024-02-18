import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.main`  
  display: flex;
  flex-direction: column;  
  
  > a {
    margin-top: 40px;
  }

  > h2 {
    font-family: 'Roboto Slab', serif;
    font-size: 36px;
    font-weight: 500;

    margin-top: 24px;
  }

  > div:nth-child(3) {
    margin-top: 20px;
    display: flex;
    gap: 40px;
  }

  > div:nth-child(4) {
    margin-top: 40px;

    > textarea {
      resize: none;
    }
  }

  > h3 {
    /* margin-top: 40px; */

    font-family: 'Roboto Slab', serif;
    font-size: 20px;    
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
  
  > section {
    margin-top: 24px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
    gap: 24px;

    padding: 16px;

    /* height: 88px; */
    width: 100%;
    border-radius: 8px;
    
    background-color: ${({ theme }) => theme.COLORS.BLACK};

    svg {
        font-size: 24px;  
        color: ${({ theme }) => theme.COLORS.PINK};
        background-color: transparent;
    }

    > #new-tag {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;      

      height: 56px;
      width: auto;
      border: 2px dashed ${({ theme }) => theme.COLORS.GRAY_600};

      padding: 16px;
      border-radius: 10px;
      
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

      input {
        width: 110px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;  
        font-weight: 400;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};        
      }

      svg {
        cursor: pointer;
      }
      
    }
    
  }
    
  > div:nth-child(7) {
    margin-top: 40px;
    display: flex;
    gap: 40px;
  }

`;