import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as LoginActions } from '../../store/ducks/login';

import Logo from '../../assets/logo.svg';

import { Form, Container } from './styles';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSignIn = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const { loginFailure, loginAttempt } = this.props;

    if (!email || !password) {
      loginFailure('Preencha e-mail e senha para continuar!');
    } else {
      const user = { email, password };
      loginAttempt(user);
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
        <Form onSubmit={this.handleSignIn}>
          <h2>Cloudcom</h2>
          <h2>PromptMode</h2>
          <img src={Logo} alt="logo promptmode" />
          {error && <p>{error}</p>}
          <input
            name="email"
            type="email"
            placeholder="Endereço de e-mail"
            onChange={this.handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Senha"
            onChange={this.handleInputChange}
          />
          <button type="submit">Entrar</button>
        </Form>
      </Container>
    );
  }
}

Login.propTypes = {
  error: PropTypes.string.isRequired,
  loginFailure: PropTypes.func.isRequired,
  loginAttempt: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: state.login.error,
});

const mapDispatchToProps = dispach => bindActionCreators(LoginActions, dispach);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
