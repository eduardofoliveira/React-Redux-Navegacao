import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as LoginActions } from '../../store/ducks/login';

class Logout extends Component {
  componentDidMount() {
    const { logoutRequest } = this.props;
    logoutRequest();
  }

  render() {
    return <p>Deslogado</p>;
  }
}

Logout.propTypes = {
  logoutRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispach => bindActionCreators(LoginActions, dispach);

export default connect(
  null,
  mapDispatchToProps,
)(Logout);
