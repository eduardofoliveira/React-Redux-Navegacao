import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as dominiosActions } from '../../store/ducks/dominios';

import { Container, Table } from './styles';

import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';

class ListDomain extends Component {
  componentDidMount() {
    const { domainListRequest } = this.props;
    domainListRequest();
  }

  render() {
    const { list } = this.props;
    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <td>Dominio</td>
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            {list.map(item => (
              <tr>
                <td>{item.dominio}</td>
                <td>
                  <Link to={`/app/domains/${item.id}`}>
                    <button type="button">
                      <img src={editIcon} alt="Editar item" />
                    </button>
                  </Link>

                  <button type="button">
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

ListDomain.propTypes = {
  domainListRequest: PropTypes.func.isRequired,
  list: PropTypes.shape({
    id: PropTypes.number.isRequired,
    dominio: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  list: state.dominios.list,
});

const mapDispatchToProps = dispatch => bindActionCreators(dominiosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListDomain);
