import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.headerAndFooter};
  width: 100%;
  height: 10vh;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;

  .header-buttons {
    button {
      margin-right: 10px;
    }
  }

  .user-logout {
    display: flex;
    align-items: center;
    flex-direction: column;

    button {
      border-radius: 100px;
      width: 38px;
    }
    
    h3 {
      margin-bottom: 4px;
      font-size: 10px;
      text-align: center;
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary.buttons};
    width: 175px;
    height: 35px;
    border: none;
    border-radius: 5px;

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

  h3 {
    color: ${({ theme }) => theme.colors.primary.white};
  }

`;

export default Container;
