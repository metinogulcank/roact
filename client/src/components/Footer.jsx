import { MailOutline, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  color: hsl(209, 30%, 20%);
`;

const Desc = styled.p`
  margin-top: 20px;
  color: hsl(209, 30%, 45%);
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  margin-top: 10px;
  color: hsl(209, 30%, 20%);
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color: hsl(209, 30%, 45%);
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: hsl(209, 30%, 45%);
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ROACT</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
      </Left>
      <Center>
        <Title>Navigasyon</Title>
        <List>
          <ListItem>Ana Sayfa</ListItem>
          <ListItem>Sepet</ListItem>
          <ListItem>Erkek Giyim</ListItem>
          <ListItem>Kadın Giyim</ListItem>
          <ListItem>Aksesuar</ListItem>
          <ListItem>Hesabım</ListItem>
          <ListItem>Sipariş Geçmişi</ListItem>
          <ListItem>İstek Listesi</ListItem>
          <ListItem>Telif Hakkı</ListItem>
        </List>
      </Center>
      <Right>
        <Title>İletişim</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px", color: "hsl(209,30%,20%)" }} />{" "}
          Fırat Üniversitesi/Elazığ
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px", color: "hsl(209,30%,20%)" }} />{" "}
          +90 555 064 8180
        </ContactItem>
        <ContactItem>
          <MailOutline
            style={{ marginRight: "10px", color: "hsl(209,30%,20%)" }}
          />{" "}
          roact@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
