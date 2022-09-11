import styled from 'styled-components';

const Container = styled.div`
  background-color: #E0E0E0;
  width: 95%;
  height: 50px;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);
  border-radius: 5px;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;

  button {
    background-color: ${({ theme }) => theme.colors.primary.buttons};
    width: 200px;
    height: 35px;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);
    font-size: 15px;
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

const Form = styled.div``;

export { Container, Form };
