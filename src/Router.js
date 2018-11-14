//This component is imported from react native flutter
// The router component is in charge of navigation of the application
// It uses the Scene tag and Action function, when the Actions.sceneKey()
// is called it will execute that file of js and automatically create a back button
// for the previous scene on both platforms

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import CardsList from './components/CardsList';
import CreateCard from './components/CreateCard';
import ShowCard from './components/ShowCard';

//This component takes nothing but expects all the defined js files
// within the Scene tags to exist
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
