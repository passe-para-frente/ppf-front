import React from 'react';

import { Container, DetailsInfo } from './styles';
import ballIcon from '../../../../assets/images/details/ball.png';
import booksIcon from '../../../../assets/images/details/books.png';
import techIcon from '../../../../assets/images/details/tech.png';

import background from '../../../../assets/images/details/bgback.png';

export default function Details() {
  return (
    <Container>
      <img src={background} alt="" />

      <DetailsInfo>
        <div>
          <h4>O que doar?</h4>
          <p>
            Todo tipo de MATERIAL ESPORTIVO, LIVRO, ou
            <br /> VESTUÁRIO em condições de uso.
          </p>
          <figure>
            <img src={ballIcon} alt="imagem de um livro" />
            <img src={booksIcon} alt="imagem de uma bola de futebol" />
            <img src={techIcon} alt="imagem de uma bola de futebol" />
          </figure>
          <button type="button">Confira a lista completa</button>
        </div>

        <div>
          <h4>Para quem doar?</h4>
          <p>
            As instituíções beneficiadas são ESCOLAS DA REDE
            <br />
            PÚBILCA DE ENSINO da cidade de São Paulo
            <br />
            devidamente cadastradas no site.
          </p>
          <span>
            No momento de doação, ou seja, durante o fluxo da
            <br />
            doação, você poderá escolher a escola que deseja
            <br />
            beneciciar buscando pelo nome ou localização. O<br />
            site indicará quais as escolas mais próximas a você.
          </span>

          <button type="button">Confira a lista completa</button>
        </div>
      </DetailsInfo>
    </Container>
  );
}
