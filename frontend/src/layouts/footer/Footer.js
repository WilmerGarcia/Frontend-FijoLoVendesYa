import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterElements";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box>

      <Container>
        <Row>
          <Column>
            <Heading>Contactanos</Heading>
            <FooterLink href="#">+504-2273-6756</FooterLink>
            <FooterLink href="#">+504-2273-6756</FooterLink>
            <FooterLink href="#">+504-2273-6756</FooterLink>
          </Column>
          <Column>
            <Heading>E-Mail</Heading>
            <FooterLink href="#">fijolovendes@gmail.com</FooterLink>
            <FooterLink href="#">flvendes56@hotmail.com</FooterLink>

          </Column>
          <Column>
            <Heading>Informacion</Heading>
            <FooterLink href="#">Nuestra Experiencia</FooterLink>
            <FooterLink href="#">Quienes Somos</FooterLink>

          </Column>
          <Column>
            <Heading>Redes Sociales</Heading>
            <FooterLink href="https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  {/* <FaFacebookF /> */}
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  {/* <FaInstagram /> */}
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  {/* <FaTwitter /> */}
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  {/* <FaYoutube /> */}
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;