import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: hsl(209, 30%, 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding-top: -10px;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgrey;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: hsl(209, 30%, 45%);
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Haberler</Title>
      <Desc>Favori ürünlerinle ilgili bildirim al.</Desc>
      <InputContainer>
        <Input placeholder="Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
