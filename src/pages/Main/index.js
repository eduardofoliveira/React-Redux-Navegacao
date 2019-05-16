import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import UserIcon from '../../assets/user.svg';
import { Container, Header } from './styles';

import ListUsers from '../../components/ListUsers';
import AddUser from '../../components/AddUser';

class Main extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Header>
          <Link to="/app">
            <img src={Logo} alt="Cloud Prompt Mode" />
          </Link>

          <h2>Cloud - PromptMode</h2>

          <Link to="/app/users">
            <img src={UserIcon} alt="Usuários" />
          </Link>
        </Header>
        <Switch>
          <Route exact path="/app/users" component={ListUsers} />
          <Route exact path="/app/users/add" component={AddUser} />
        </Switch>
      </Container>
    );
  }
}

export default Main;
