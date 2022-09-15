import styled from 'styled-components';

const Container = styled.div`
  h4 {
    margin-left: 50px;
  }
`;

const Table = styled.table`
  background-color: #e0e0e0;
  width: 95%;
  height: 10vh;
  margin: 0 auto;
  box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);
  border-radius: 5px;
  margin-top: 20px;

  th {
    font-size: 18px;
    background-color: #d6d6d6;
  }

  td {
    text-align: center;
    padding-top: 7px;
    padding-bottom: 7px;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary.buttons};
    width: 175px;
    height: 35px;
    border: none;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 900;

    :hover {
      background-color: #028d47;
      color: ${({ theme }) => theme.colors.primary.white};
    }
  }
`;

const Content = styled.div`
  display:flex;
  justify-content:flex-end;
  width: 95%;
  margin-top: 20px;
`;

const Form = styled.form`
  background-color: #e0e0e0;
  box-shadow: 18px 15px 26px 3px rgba(150, 150, 150, 0.41);
  width: 95%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  border-radius: 7px;

  label {
    select {
      margin-left: 5px;
      margin-right: 20px;
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
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary.buttons};
    width: 175px;
    height: 35px;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);
    font-size: 12px;
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
  input {
    width: 300px;
    height: 35px;
    background-color: transparent;
    border: 1px solid #d6d6d6;
    border-radius: 7px;
    padding-left: 5px;
    outline: none;

    ::placeholder {
      color: #999999;
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

export { Table, Content, Form, Container };
