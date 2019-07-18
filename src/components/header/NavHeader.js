import React from 'react';
import { Link } from 'react-router-dom';

import LogoMenu from '../../assets/images/logo-menu-top.png';
import BtDoar from '../../assets/images/bt-doar.png';

const headerColor = {
  backgroundColor: '#1E76BA',
};

function NavHeader() {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0" style={headerColor}>
        <div className="nav-wrapper container">
          <Link to="/">
            <img className="logo-menu" src={LogoMenu} alt="logo menu" />
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#receber">Receber</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
            <li>
              <img className="bt-doar" src={BtDoar} alt="Botao Doar" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavHeader;
