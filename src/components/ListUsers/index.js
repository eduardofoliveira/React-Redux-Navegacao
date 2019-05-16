import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as usuariosActions } from '../../store/ducks/usuarios';

import { Container, Table, Button } from './styles';

import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

class ListUsers extends Component {
  componentDidMount() {
    const { listRequest } = this.props;
    listRequest();
  }

  render() {
    const { usuarios, deleteUserRequest } = this.props;

    return (
      <Container>
        <Link to="/app/users/add">
          <Button>Adicionar</Button>
        </Link>
        <Table>
          <thead>
            <tr>
              <td>Usuário</td>
              <td>E-mail</td>
              <td>Data criação</td>
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(item => (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.createdAt}</td>
                <td>
                  <button type="button">
                    <img src={editIcon} alt="Editar item" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      deleteUserRequest(item.id);
                    }}
                  >
                    <img src={deleteIcon} alt="Deletar item" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

ListUsers.propTypes = {
  listRequest: PropTypes.func.isRequired,
  deleteUserRequest: PropTypes.func.isRequired,
  usuarios: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  usuarios: state.usuarios.list,
});

const mapDispatchToProps = dispatch => bindActionCreators(usuariosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListUsers);
