import React from 'react';
import { Link } from 'react-router-dom';

import LogoMenu from '../../assets/images/logo-menu-top.png';
import BtDoar from '../../assets/images/bt-doar.png';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <nav>
        <Link to="/">
          <img src={LogoMenu} alt="logo menu" />
        </Link>
        <ul>
          <li>
            <a href="#sobre">O que é</a>
          </li>
          <li>
            <a href="#receber">Como funciona</a>
          </li>
          <li>
            <a href="#contato">O que doar</a>
          </li>
          <li>
            <a href="#login">Contato</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <img src={BtDoar} alt="Botao Doar" />
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
