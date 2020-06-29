import React, { createRef, useState, useEffect } from "react";

import Footer from "../../components/Footer";
import { Container, ContactContent, Map } from "./styles";

import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [showVideo, setShowVideo] = useState(false);

  const container = createRef();

  const videoObserver = new IntersectionObserver(onVideoIntersection, {
    rootMargin: "100px 0px",
    threshold: 0.25,
  });
  useEffect(() => {
    if (window && "IntersectionObserver" in window) {
      if (container && container.current) {
        videoObserver.observe(container.current);
      }
    } else {
      setShowVideo(true);
    }
  }, [container]);
  function onVideoIntersection(entries) {
    if (!entries || entries.length <= 0) {
      return;
    }

    if (entries[0].isIntersecting) {
      setShowVideo(true);
      videoObserver.disconnect();
    }
  }
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
            Solicite seu Orçamento
          </h3>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h4>Contato</h4>
            <a href="tel:(48)3346-8315">
              <FiPhone /> (48) 3346-8315
            </a>
            <a href="https://wa.me/5548996869903">
              <FaWhatsapp /> (48) 99686-9903
            </a>
            <a href="https://wa.me/5548996869903">
              <AiOutlineMail /> contato@onixmarmoresegranitos.com.br
            </a>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h4>Endereço</h4>
            <p>Rua. Guilherme Jacobe Buch, 535.</p>
            <p>São José – Sc.</p>
            <p>Cep: 88111-220.</p>
          </div>
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h4>Horário de Funcionamento</h4>
            <p>De Segunda à Sexta: </p>
            <p>Das 08:00 até 12:00 ~ 13:30 até 18:00.</p>
            <p>Sábados e Domingos: Fechado.</p>
          </div>
        </ContactContent>
        <Map ref={container}>
          {showVideo ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.6681292721814!2d-48.62931473202338!3d-27.572808381628306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x679523fd659171cb!2s%C3%94nix+Marmores+e+Granitos!5e0!3m2!1spt-BR!2sbr!4v1528209812869"
              allowFullScreen=""
              width="100%"
              height="450"
              frameBorder="0"
            ></iframe>
          ) : (
            undefined
          )}
        </Map>
      </Container>
      <Footer />
    </>
  );
};
export default Contact;
