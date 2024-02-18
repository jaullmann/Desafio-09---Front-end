import styled from "styled-components";

export const Container = styled.div`
  overflow-y: auto;
  margin-bottom: 40px;

  > header {
    height: 144px;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_BROWN};

    a {
      margin-left: 16%;
    }
  }

  > content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
  }

  > content section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;

    margin-bottom: 64px;
  }

  > content section img {
    margin-top: -95px;

    height: 186px;
    width: 186px;
    border-radius: 50%;
  }

  > content section label {
    margin-top: -50px;
    margin-right: -130px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 48px;
    border-radius: 50%;
    background: ${({ theme }) => theme.COLORS.PINK};

    cursor: pointer;

    svg {
      font-size: 20px; 
      color: ${({ theme }) => theme.COLORS.BLACK};
    }

    input {      
      display: none;
    }
  }
`;

export const Form = styled.form`  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;

  > div {
    width: 340px;
  }

  > div:nth-child(2), div:nth-child(4) {
    margin-bottom: 24px;
  }

  div:nth-child(1) input::placeholder, 
  div:nth-child(2) input::placeholder{
    color: white;
  }

  div:nth-child(3) input, 
  div:nth-child(4) input {
    font-size: 14px;
  }
`;

