import React from "react";
import { GiStakeHammer } from "react-icons/gi";
import { AiOutlineFieldTime, AiOutlineLike } from "react-icons/ai";

import { Container, AboutContent } from "./styles";

const About = () => {
  return (
    <Container id="sobre">
      <AboutContent>
        <h2
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          Profissionais com mais de 20 anos de experiência no mercado de
          mármores e granitos
        </h2>
        <span />

        <aside
          data-sal="slide-up"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <div>
            <h1>Onix Mármores e Granitos</h1>
            <span />
            <p>
              A empresa iniciou suas atividades em 2017 e atende clientes por
              toda Grande Florianópolis. Apesar de ser uma empresa fundada
              recentemente, nossos profissionais possuem mais de 20 anos de
              experiência na área. Com mão de obra qualificada e infraestrutura
              conseguimos atender diferentes projetos, aliando competência,
              ética e um ótimo preço.{" "}
            </p>
          </div>
          <ul>
            <li>
              <div>
                <GiStakeHammer size={32} />
              </div>
              <h3>Qualidade no serviço</h3>
            </li>
            <li>
              <div>
                <AiOutlineFieldTime size={32} />
              </div>
              <h3>Compromisso com o prazo de entrega</h3>
            </li>
            <li>
              <div>
                <AiOutlineLike size={32} />
              </div>
              <h3>Garantia de profissionais com experiência na área</h3>
            </li>
          </ul>
        </aside>
      </AboutContent>
    </Container>
  );
};
export default About;
