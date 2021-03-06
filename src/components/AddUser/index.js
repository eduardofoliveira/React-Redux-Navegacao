/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as usuariosActions } from '../../store/ducks/usuarios';

import { Container, Form, ButtonContainer } from './styles';

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      senha: '',
      senhaConf: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleAdd = async (event) => {
    event.preventDefault();

    const { addUserFailure, addUserRequest } = this.props;
    const {
      nome, email, senha, senhaConf,
    } = this.state;

    if (!nome || !email || !senha || !senhaConf) {
      addUserFailure('Preencher todos os campos');
    } else if (senha !== senhaConf) {
      addUserFailure('As senhas não são iguais');
    } else {
      const user = {
        nome,
        email,
        password: senha,
      };
      addUserRequest(user);
    }
  };

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { error } = this.props;
    return (
      <Container>
        <Form onSubmit={this.handleAdd}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="nome">Nome:</label>
            <input id="nome" name="nome" type="text" onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="email">E-mail:</label>
            <input id="email" name="email" type="email" onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="senha">Senha:</label>
            <input id="senha" name="senha" type="password" onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="senhaConf">Confirmação Senha:</label>
            <input
              id="senhaConf"
              name="senhaConf"
              type="password"
              onChange={this.handleInputChange}
            />
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
  }
}

AddUser.propTypes = {
  error: PropTypes.string.isRequired,
  addUserFailure: PropTypes.func.isRequired,
  addUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.usuarios.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(usuariosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddUser);
