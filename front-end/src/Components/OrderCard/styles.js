import styled from 'styled-components';

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.backgroundCard};
  width: 600px;
  height: 70px;
  border-radius: 7px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 15px;
  box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);
`;

const Order = styled.div`
background-color: ${({ theme }) => theme.colors.primary.buttons};
width: 100px;
height: 40px;
border-radius: 7px;
display: flex;
justify-content: space-around;
align-items: center;
text-decoration: underline #03c966;
box-shadow: 10px 15px 12px -11px rgba(150, 150, 150, 0.4);

.link {
text-decoration: none;
  color: #ffffff; 
}

h3 {
  color: #ffffff;
}
`;

const Status = styled.div``;

const Date = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 60px;
`;

const TotalPrice = styled.div`

`;

const Adress = styled.div``;

export { Card, Order, Status, Date, TotalPrice, Adress };
