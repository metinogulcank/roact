import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  idth: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 20%;
  height: 40px;
  border: none;
  margin: 15px 20px;
  background-color: hsl(209, 30%, 45%);
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Hesap Oluştur</Title>
        <Form>
          <Input placeholder="Ad" />
          <Input placeholder="Soyad" />
          <Input placeholder="Kullanıcı Adı" />
          <Input placeholder="Email" />
          <Input placeholder="Şifre" />
          <Input placeholder="Şifreyi Onaylayın" />
          <Agreement>
            Hesap oluşturarak <b>Gizlilik Politikası</b>'nı kabul etmiş
            olursunuz
          </Agreement>
          <Button>Oluştur</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
