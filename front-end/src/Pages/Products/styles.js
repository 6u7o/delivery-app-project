import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  button {
    &.cart-button {
    background-color: ${({ theme }) => theme.colors.primary.buttons};
    width: 300px;
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
  }
`;

const Form = styled.div``;

export { Container, Form };
