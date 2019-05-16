import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import UserIcon from '../../assets/user.svg';
import LogoutIcon from '../../assets/logout.svg';
import DomainsIcon from '../../assets/dominio.svg';
import { Container, Header } from './styles';

import ListUsers from '../../components/ListUsers';
import AddUser from '../../components/AddUser';
import EditUser from '../../components/EditUser';

class Main extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header>
          <div className="start">
            <Link to="/app">
              <img src={Logo} alt="Cloud Prompt Mode" />
            </Link>

            <h2>Cloud - PromptMode</h2>

            <Link to="/app/users">
              <img src={UserIcon} alt="Usuários" />
            </Link>

            <Link to="/app/domains">
              <img src={DomainsIcon} alt="Dominios" />
            </Link>
          </div>
          <div className="end">
            <Link to="/logout">
              <img src={LogoutIcon} alt="Logout" />
            </Link>
          </div>
        </Header>
        <Switch>
          <Route exact path="/app/users" component={ListUsers} />
          <Route exact path="/app/users/add" component={AddUser} />
          <Route exact path="/app/users/:id" component={EditUser} />
        </Switch>
      </Container>
    );
  }
}

export default Main;
