import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  width: 300px;
  height: 400px;
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
    width: 250px;
    height: 250px;
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
  justify-content: center;
  align-items: center;

  input {
    width: 75px;
    height: 50px;
    background-color: white;
    border: 1px solid #d6d6d6;
    padding-left: 5px;
    outline: none;
    text-align: center;
    font-size: 17px;
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

    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary.buttons};
    width: 50px;
    height: 50px;
    border: none;
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

    &.increase-button {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    &.decrease-button {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
`;

export { Card, Form };
