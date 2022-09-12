import styled from 'styled-components';

const Table = styled.table`
  background-color: #e0e0e0;
  width: 95%;
  height: 10vh;
  margin: 0 auto;
  box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);
  border-radius: 5px;

  th {
    font-size: 18px;
    background-color: #d6d6d6;
  }

  td {
    text-align: center;
    padding-top: 7px;
    padding-bottom: 7px;
  }
`;

const Content = styled.div`
  display:flex;
  justify-content:flex-end;
  width: 95%;
  margin-top: 20px;
`;

export { Table, Content };
