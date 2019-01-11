import React, { Component } from 'react';
import MessageList from 'components/MessageList';
import MessageBox from 'components/MessageBox';
import firebase from 'firebase';

class App extends Component {
 
 

  constructor(props){super(props);
    var data = require('data/config.json'); 

    var obj = data[0];

   
    var config = {
    apiKey: obj.apiKey,
    authDomain: obj.authDomain,
    databaseURL: obj.databaseURL,
    projectId: obj.projectId,
    storageBucket: obj.storageBucket,
    messagingSenderId: obj.messagingSenderId
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
