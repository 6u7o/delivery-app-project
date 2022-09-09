import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.background};
  width: 100vw;
  max-width: 1980px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: white;
  box-shadow: 18px 15px 26px 3px rgba(150, 150, 150, 0.41);
  width: 380px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
  border-radius: 7px;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 30px;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary.buttons};
    width: 175px;
    height: 35px;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);

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
  input {
    width: 175px;
    height: 35px;
    background-color: transparent;
    border: 1px solid #d6d6d6;
    border-radius: 7px;
    padding-left: 5px;
    outline: none;
    margin-top: 5px;

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
`;

export { Container, Form };
