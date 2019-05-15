import React, { Component, Fragment } from 'react';

import { Table, Button } from './styles';

// import editIcon from '../../assets/edit.svg';
// import deleteIcon from '../../assets/delete.svg';

class ListUsers extends Component {
  state = {
    // usuarios: [],
  };

  componentDidMount() {
    // this.props.listRequest();
  }

  render() {
    return (
      <Fragment>
        <Button>Adicionar</Button>
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
            {/* {this.props.listUsers.map(item => (
              <tr key={item.id}>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.createdAt}</td>
                <td>
                  <button>
                    <img src={editIcon} alt="Editar item" />
                  </button>

                  <button
                    onClick={() => {
                      this.props.deleteUserRequest(item.id, swal);
                    }}
                  >
                    <img src={deleteIcon} alt="Deletar item" />
                  </button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

export default ListUsers;
