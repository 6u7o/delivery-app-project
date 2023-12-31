import styled from 'styled-components';

const Container = styled.div`
  > table, form, h3, .filters-container {
    width: 95%;
    margin: 0 auto;
  };

  h3 {
    margin-top: 2rem;
  };

  .filters-container {
    margin: 0.5rem auto;
    display: flex;
    flex-wrap: wrap;

    * {
      padding: 0.3rem;
    };

    h4 {
      width: 100%;
    };

    label:has(input) h5 {
      width: 20rem
    };
  }
`;

const Table = styled.table`
  background-color: #e0e0e0;
  width: 95%;
  height: 10vh;
  margin: 0 auto;
  box-shadow: 0px 2px 1px 1px rgba(9, 7, 7, 0.23);
  border-radius: 5px;

  th {
    font-size: 18px;
    background-color: #d6d6d6;
  };

  td {
    text-align: center;
    padding-top: 7px;
    padding-bottom: 7px;
  };

  button {
    background-color: ${({ theme }) => theme.colors.primary.buttons};
    width: 175px;
    height: 35px;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);

    &.register-button {
      margin-top: 40px;
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

const Form = styled.form`
width: 95%;
box-shadow: 0px 2px 1px 1px rgba(9, 7, 7, 0.23);
border: 1px solid rgba(100, 100, 100, 0.2);
padding: 10px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 0 auto;
margin-bottom: 2rem;

  h4 {
    width: 80vw; // ajustar
  }
  div:has(button) {
    width: 100%; // ajustar
    text-align: center;
  }
  button {
    background-color: ${({ theme }) => theme.colors.primary.buttons};
    width: 175px;
    height: 35px;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);

    &.register-button {
      margin-top: 40px;
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
const FormComponentsContainer = styled.label`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-bottom: 0.5rem;
  span, h5 {
    font-size: 0.9rem;
    font-weight: 500;
  };
  input, select {
    height: 2rem;
    padding: 0 1rem;
    border: 2px solid black;
    border-radius: 0.5rem;
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
  };
`;

export { Container, Table, Form, FormComponentsContainer };
