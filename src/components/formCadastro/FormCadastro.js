import React from 'react';

import './formCadastro.css';

export default function FormCadastro() {
  return (
    <>
      <div className="form-cadastro z-depth-1">
        <div className="form-titulo white-text">Quero doar</div>
        <div className="form-cadastro-content">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Senha</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="validate" type="password" className="validate" />
              <label htmlFor="password">Confirmar Senha</label>
            </div>
          </div>
        </div>

        <div className="row wrap-button">
          <div className="input-field col s12">
            <button
              type="button"
              className="cadastrar waves-effect center btn-flat"
            >
              cadastrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
