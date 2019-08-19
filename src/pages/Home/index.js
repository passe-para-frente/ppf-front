import React from 'react';

import Header from '../../components/Header/Header';
// import './home.css';

// import FormCadastro from '../../components/formCadastro/FormCadastro';

import MainSection from './sections/Main';
import AboutSection from './sections/About';
import DetailsSection from './sections/Details';
import ContactSection from './sections/Contact';

function Main() {
  return (
    <>
      <Header />
      <MainSection />
      <AboutSection />
      <DetailsSection />
      <ContactSection />
    </>
  );
}

export default Main;
