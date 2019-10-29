import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import {
  Container,
  ContainerContent,
  ContactHeader,
  ContactInfo,
  ContactForm,
} from './styles';

import logo from '../../../../assets/images/contact/logo-black.png';

export default function Contact() {
  return (
    <Container>
      <ContactHeader>
        <h1>Entre em contato</h1>
        <span>contato@institutocades.com.br</span>
      </ContactHeader>
      <ContainerContent>
        <ContactInfo>
          <div>
            <img src={logo} alt="" />
          </div>
          <p>
            Aquele material esportivo, livro ou vestuário e ajude
            <br />
            milhares de escolas e crianças. E o melhor: não precisa
            <br />
            sair de casa para doar. Nós retiramos o material em seu <br />
            endereço e o entregamos à instituição escolhida por você.
          </p>
        </ContactInfo>
        <ContactForm>
          <Form>
            <Input name="name" />
            <Input name="email" />
            <Input multiline name="bio" />

            <button type="submit">Send</button>
          </Form>
        </ContactForm>
      </ContainerContent>
    </Container>
  );
}
