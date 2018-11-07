import React, { Component } from 'react' ;
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux' ;
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import MyRouter from './Router' ;

//This component is where the application starts due to the ref of this file in
// our main index.js file
class App extends Component {

//built in function that automatically is called when the application runs
//so I found it fitting to set the database connection when the app is first opened
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
//In the render method I return my router for navigation purposes which I assume I have created
// along with the built in provider tag to allow me to use the redux library to use the controller model approach
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
