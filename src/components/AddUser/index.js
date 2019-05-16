/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Form, ButtonContainer } from './styles';

const AddUser = () => (
  <Container>
    <Form>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input id="nome" name="nome" type="text" />
      </div>

      <div>
        <label htmlFor="email">E-mail:</label>
        <input id="email" name="email" type="email" />
      </div>

      <div>
        <label htmlFor="senha">Senha:</label>
        <input id="senha" name="senha" type="password" />
      </div>

      <div>
        <label htmlFor="senha_conf">Confirmação Senha:</label>
        <input id="senha_conf" name="senha_conf" type="password" />
      </div>

      <ButtonContainer>
        <button type="submit">Adicionar</button>
        <Link to="/app/users">
          <button type="submit">Voltar</button>
        </Link>
      </ButtonContainer>
    </Form>
  </Container>
);

export default AddUser;
