import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CardsList from './components/CardsList';
import CreateCard from './components/CreateCard';
import ShowCard from './components/ShowCard';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component = {LoginForm} title="Please Login" initial/>
          </Scene>
        <Scene key="main">
          <Scene
          rightTitle="Add"
          onRight = { () => Actions.createCard()}
          key="cardsList"
          component = {CardsList}
          title="Your Cards"
          initial
           />
          <Scene key="createCard" component={CreateCard} title="Create Card" />
          <Scene key="showCard" component={ShowCard} title="Display Single Card" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
