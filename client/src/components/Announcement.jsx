import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: hsl(209, 30%, 20%);
  color: #ffffff;
  display: flex;
  text-align: center;
  align-items: center;
`;
const Text = styled.p`
  padding-left: 20px;
`;
const Announcement = () => {
  return (
    <Container>
      <Text>100TL ve Üzeri Siparişlerde Kargo Bedava!!!!</Text>
    </Container>
  );
};

export default Announcement;
