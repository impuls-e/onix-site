import React from "react";

import Footer from "../../components/Footer";
import { Container, ContactContent } from "./styles";

import { FiInstagram, FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Container id="contato">
        <ContactContent>
          <h3
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Entre em Contato
          </h3>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h4>Contato</h4>
            <a href="tel:(48)3224-1849">
              <FiPhone /> (48) 3224-1849
            </a>
            <a href="https://wa.me/5548996979837">
              <FaWhatsapp /> (48) 99697-9837
            </a>
            <a href="https://wa.me/5548999163111">
              <FaWhatsapp /> (48) 99916-3111
            </a>
            <a href="https://www.instagram.com/bazardaschavesecarimbos/">
              <FiInstagram /> Instagram
            </a>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h4>Endereço</h4>
            <p>Rua. Felipe Schmidt, 80 Centro.</p>
            <p>Florianópolis – Sc.</p>
            <p>Cep: 88010-000.</p>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h4>Horário de Funcionamento</h4>
            <p>Segunda à Sexta: 08:00 – 19:00.</p>
            <p>Sábado: 09:00 - 13:00.</p>
            <p>Domingo: Fechado.</p>
          </div>
        </ContactContent>
      </Container>
      <Footer />
    </>
  );
};
export default Contact;
