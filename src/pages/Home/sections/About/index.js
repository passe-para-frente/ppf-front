import React from 'react';

import { Container, AboutDetails } from './styles';

import agendaIcon from '../../../../assets/images/about/agenda.png';
import cadIcon from '../../../../assets/images/about/cad.png';
import contatoIcon from '../../../../assets/images/about/contato.png';
import infoIcon from '../../../../assets/images/about/info.png';
import insituicaoIcon from '../../../../assets/images/about/instituicao.png';

export default function About() {
  return (
    <Container>
      <div>
        <h1>Como funciona?</h1>
        <p>
          Pessoas físicas e jurídicas podem doar. Para isso, o fluxo do site
          permite que façam o cadastro com login, preencham as informações sobre
          o material e escolham a instituição que querem doar.
        </p>

        <h3>É tudo muito rápido!</h3>

        <p>
          Após completada a doação, a organização entrará em contato via e-mail
          ou telefone para informar a data de retirada do material.
        </p>
        <p>
          As instituições e escolas tem seus próprios cadastros e informações
          completas disponíveis no site para consulta.
        </p>
      </div>

      <AboutDetails>
        <li>
          <img src={cadIcon} alt="faça o cadastro" />
          <span>
            Faça seu
            <br /> cadastro
          </span>
        </li>
        <li>
          <img src={infoIcon} alt="informações sobre a doação" />
          <span>
            Preencha as <br />
            informações <br />
            sobre a doação
          </span>
        </li>
        <li>
          <img src={insituicaoIcon} alt="escolha a instituição" />
          <span>
            Escolha a <br /> instituição que <br /> quer ajudar
          </span>
        </li>
        <li>
          <img src={contatoIcon} alt="aguarde contato da organização" />
          <span>
            Aguardo contato <br /> da organização
          </span>
        </li>
        <li>
          <img src={agendaIcon} alt="agende uma data" />
          <span>
            Agende uma data <br /> para a retirada
          </span>
        </li>
      </AboutDetails>
    </Container>
  );
}
