import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as LoginActions } from '../store/ducks/login';

class Main extends Component {
  state = {};

  render() {
    const { loginAttempt } = this.props;
    return (
      <div>
        <h1>Main</h1>
        <button type="button" onClick={loginAttempt}>
          Entrar
        </button>
      </div>
    );
  }
}

Main.propTypes = {
  loginAttempt: PropTypes.func.isRequired,
};

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispach => bindActionCreators(LoginActions, dispach);

export default connect(
  null,
  mapDispatchToProps,
)(Main);
