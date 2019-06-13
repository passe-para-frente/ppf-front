import React, { Component } from 'react';

import Header from '../../components/header/NavHeader';
import './home.css';

import BannerPrincipal from '../../assets/images/banner_principal.jpg';
import FormCadastro from '../../components/formCadastro/FormCadastro';

export default class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="main-section">
          <img className="responsive-img" src={BannerPrincipal} alt="Imagem de fundo"/>

          <div className="cover" />

          <div className="main-section-content">
            <div className="container">
              <div className="row">
                <div className="col s12 l7">
                  <h2 className="white-text">Passe para frente</h2>
                  
                  <div className="white-text">
                    <p><strong>Passe para Frente</strong> é um site de <strong>doação de material esportivo</strong>, livro ou vestuário onde pessoas físicas e
                      jurídicas podem <strong>doar</strong> a fim de contribuir com instituições, escolas da rede pública de ensino e crianças.
                      Queremos com isso estimular a cultura de doação no país.</p>
                  </div>

                  <div className="saiba-mais orange-text text-accent-3">
                    <strong>SAIBA MAIS</strong>
                    <i className="material-icons">expand_more</i>
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
                <p>Pessoas físicas e jurídicas podem doar. Para isso, o fluxo do site permite que façam o cadastro com
                    login, preencham as informações sobre o material e escolham a instituição que querem doar.
                </p>

                <h3>É tudo muito rápido!</h3>

                <p>Após completada a doação, a organização entrará em contato via e-mail ou telefone para informar a data
                    de retirada do material.

                </p>
                <p>As instituições e escolas tem seus próprios cadastros e informações completas disponíveis no site para
                consulta.</p>
              </div>
              <div className="col l4">
                <FormCadastro />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
