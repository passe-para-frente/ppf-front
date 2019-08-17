import React from 'react';

import BannerPrincipal from '../../../../assets/images/img-background-bg.png';
import LogoMain from '../../../../assets/images/logo.png';
import { Container, Content } from './styles';

export default function Main() {
  return (
    <Container>
      <img src={BannerPrincipal} alt="Imagem de fundo" />

      <div className="cover" />

      <Content>
        <img
          className="logo-main"
          src={LogoMain}
          alt="Logo Passe Para a Frente"
        />
        <p>
          <strong>Passe para Frente</strong> é um site de{' '}
          <strong>doação de material esportivo</strong>, livro ou vestuário onde
          pessoas físicas e jurídicas podem <strong>doar</strong> a fim de
          contribuir com instituições, escolas da rede pública de ensino e
          crianças. Queremos com isso estimular a cultura de doação no país.
        </p>
        <div className="saiba-mais">
          <strong>SAIBA MAIS</strong>
        </div>
      </Content>
    </Container>
  );
}
