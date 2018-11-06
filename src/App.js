import React, { Component } from 'react' ;
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux' ;
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import MyRouter from './Router' ;


class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyByzuFR21QSm1c7nj6JSNpdRRqMzkQsI1c',
      authDomain: 'healthdeck-43498.firebaseapp.com',
      databaseURL: 'https://healthdeck-43498.firebaseio.com',
      projectId: 'healthdeck-43498',
      storageBucket: 'healthdeck-43498.appspot.com',
      messagingSenderId: '610614263722'
  };
  firebase.initializeApp(config);
}
  render () {
    const store = createStore(reducers, {} , applyMiddleware(ReduxThunk));

    return (
      <Provider store= {store}>
        <MyRouter />
      </Provider>
    );
  }
}

export default App;
