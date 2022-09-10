import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  width: 200px;
  height: 250px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 15px;
  box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);
  
  h5 {
    margin-top: 5px;
  }

  img {
    width: 160px;
    height: 160px;
  }
`;

const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.primary.headerAndFooter};
  width: 100%;
  height: 250px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  input {
    width: 50px;
    height: 35px;
    background-color: white;
    border: 1px solid #d6d6d6;
    border-radius: 7px;
    padding-left: 5px;
    outline: none;
    text-align: center;
    font-weight: 700;

    ::placeholder {
      color: #d6d6d6;
    }

    :hover {
      border: 1px solid ${({ theme }) => theme.colors.primary.buttons};
      color: ${({ theme }) => theme.colors.primary.headerAndFooter};
    }

    :focus {
      border: 2px solid ${({ theme }) => theme.colors.primary.buttons};
      color: ${({ theme }) => theme.colors.primary.headerAndFooter};
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary.buttons};
    width: 30px;
    height: 35px;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);
    font-size: 20px;
    font-weight: 900;

    &.login-button {
      margin-top: 50px;
    }

    &.register-button {
      margin-top: 5px;
    }

    :hover {
      background-color: #028d47;
      color: ${({ theme }) => theme.colors.primary.white};
    }

    :disabled {
      background-color: ${({ theme }) => theme.colors.primary.backgroundCard};
      color: #00000040;
      cursor: not-allowed;
    }
  }
`;

export { Card, Form };
