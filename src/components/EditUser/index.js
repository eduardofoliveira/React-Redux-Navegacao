/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as usuariosActions } from '../../store/ducks/usuarios';
import api from '../../services/api';

import { Container, Form, ButtonContainer } from './styles';

class EditUser extends Component {
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

  componentDidMount = async () => {
    const { match } = this.props;
    const { data } = await api.get(`/user/${match.params.id}`);

    this.setState({
      nome: data.nome,
      email: data.email,
    });
  };

  handleAdd = async (event) => {
    event.preventDefault();

    const { addUserFailure, editUserRequest, match } = this.props;
    const {
      nome, email, senha, senhaConf,
    } = this.state;

    if (nome && email && !senha && !senhaConf) {
      const user = {
        id: match.params.id,
        nome,
        email,
      };

      editUserRequest(user);
    } else if (!nome || !email || !senha || !senhaConf) {
      addUserFailure('Preencher todos os campos');
    } else if (senha !== senhaConf) {
      addUserFailure('As senhas não são iguais');
    } else {
      const user = {
        id: match.params.id,
        nome,
        email,
        password: senha,
      };
      editUserRequest(user);
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
    const { nome, email } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleAdd}>
          {error && <p>{error}</p>}
          <div>
            <label htmlFor="nome">Nome:</label>
            <input
              id="nome"
              name="nome"
              type="text"
              onChange={this.handleInputChange}
              value={nome}
            />
          </div>

          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={this.handleInputChange}
              value={email}
            />
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
            <button type="submit">Alterar</button>
            <Link to="/app/users">
              <button type="submit">Voltar</button>
            </Link>
          </ButtonContainer>
        </Form>
      </Container>
    );
  }
}

EditUser.propTypes = {
  error: PropTypes.string.isRequired,
  addUserFailure: PropTypes.func.isRequired,
  editUserRequest: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.usuarios.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(usuariosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUser);
