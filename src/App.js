import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';
// import { API_KEY } from 'react-native-dotenv';

class App extends Component {
  componentDidMount() {
//    Initialize Firebase
  const config = {
    apiKey: 'AIzaSyD_Qc5AXsnYgKCyJS3zxGdH_xGmBeAnSsc',
    authDomain: 'manager-6e378.firebaseapp.com',
    databaseURL: 'https://manager-6e378.firebaseio.com',
    projectId: 'manager-6e378',
    storageBucket: 'manager-6e378.appspot.com',
    messagingSenderId: '836166884565'
  };
  firebase.initializeApp(config);
   }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>

        <Router />
      </Provider>
    );
  }
}

export default App;
