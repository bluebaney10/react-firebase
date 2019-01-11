import React, { Component } from 'react';
import MessageList from 'components/MessageList';
import MessageBox from 'components/MessageBox';
import firebase from 'firebase';

class App extends Component {


  constructor(props){super(props);var config = {
    apiKey: "AIzaSyDhsrx2t-z4ENeX3P7ki9769pk951bweoA",
    authDomain: "react-firebase-7dede.firebaseapp.com",
    databaseURL: "https://react-firebase-7dede.firebaseio.com",
    projectId: "react-firebase-7dede",
    storageBucket: "",
    messagingSenderId: "442908432269"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
    
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }

}
export default App;
