import React from 'react';

import Header from '../../components/Header/Header';
import './home.css';

import BannerPrincipal from '../../assets/images/img-background-bg.png';
import LogoMain from '../../assets/images/logo.png';
import FormCadastro from '../../components/formCadastro/FormCadastro';

import livro from '../../assets/images/livro-icon.png';
import bola from '../../assets/images/bola-icon.png';

function Home() {
  return (
    <>
      <Header />
      <section className="main-section">
        <img
          className="responsive-img"
          src={BannerPrincipal}
          alt="Imagem de fundo"
        />

        <div className="cover" />

        <div className="main-section-content">
          <div className="container">
            <div className="row">
              <div className="col s12 l7">
                <img
                  className="logo-main"
                  src={LogoMain}
                  alt="Logo Passe Para a Frente"
                />
              </div>
              <div className="col s12 l5">
                <div className="about-home white-text">
                  <p>
                    <strong>Passe para Frente</strong> é um site de{' '}
                    <strong>doação de material esportivo</strong>, livro ou
                    vestuário onde pessoas físicas e jurídicas podem{' '}
                    <strong>doar</strong> a fim de contribuir com instituições,
                    escolas da rede pública de ensino e crianças. Queremos com
                    isso estimular a cultura de doação no país.
                  </p>
                  <div className="saiba-mais">
                    <strong>SAIBA MAIS</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col s12 l8">
              <h1>Como funciona?</h1>
              <p>
                Pessoas físicas e jurídicas podem doar. Para isso, o fluxo do
                site permite que façam o cadastro com login, preencham as
                informações sobre o material e escolham a instituição que querem
                doar.
              </p>

              <h3>É tudo muito rápido!</h3>

              <p>
                Após completada a doação, a organização entrará em contato via
                e-mail ou telefone para informar a data de retirada do material.
              </p>
              <p>
                As instituições e escolas tem seus próprios cadastros e
                informações completas disponíveis no site para consulta.
              </p>
            </div>
            <div className="col l4">
              <FormCadastro />
            </div>
          </div>
        </div>
      </section>

      <section className="details-section">
        <div className="container">
          <div className="row">
            <div className="col s12 l6 center">
              <div className="donation-details-left">
                <div>
                  <h4>O que posso doar?</h4>
                  <p>
                    Todo tipo de MATERIAL ESPORTIVO, LIVRO, ou
                    <br /> VESTUÁRIO em condições de uso.
                  </p>
                  <div className="details-img">
                    <img src={livro} alt="imagem de um livro" />
                    <img src={bola} alt="imagem de uma bola de futebol" />
                  </div>
                  <div className="btn-details">
                    Clique aqui e confira a lista completa
                    <br /> de possibilidades para doação
                  </div>
                </div>
              </div>
            </div>

            <div className="col s12 l6">
              <div className="donation-details-right">
                <h4>Para quem posso doar?</h4>
                <p>
                  As instituíções beneficiadas são ESCOLAS DA REDE
                  <br />
                  PÚBILCA DE ENSINO da cidade de São Paulo
                  <br />
                  devidamente cadastradas no site.
                </p>
                <p>
                  No momento de doação, ou seja, durante o fluxo da
                  <br />
                  doação, você poderá escolher a escola que deseja
                  <br />
                  beneciciar buscando pelo nome ou localização. O<br />
                  site indicará quais as escolas mais próximas a você.
                </p>

                <div className="btn-details">
                  Clique aqui e confira a lista completa
                  <br /> das escolas cadastradas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;