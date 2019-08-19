import React from 'react';

import { Container } from './styles';

import logo from '../../../../assets/images/logo.png';

export default function Contact() {
  return (
    <Container>
      <h1>Entre em contato</h1>
      <div>
        <img src={logo} alt="" />
      </div>
    </Container>
  );
}
