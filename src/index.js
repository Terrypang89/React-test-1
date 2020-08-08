import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const name = 'Josh Perez';

function formatName(user){
  return user.firstName + ' ' + user.LastName;
}

const user = {
  firstName: 'Harper',
  LastName: name
}

function getGreeting(user){
  if(user){
    return <h1>Hello, {formatName(user)}</h1>;
  }
  return <h1>Hello, Stranger,</h1>
}

var element = <h1>Hello, {getGreeting(user)}</h1>;
//element += <div tabIndex="0"></div>;
//const element = <img src={user.avatarUrl}></img>;


const element1 = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);


// same as above element1
const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

//React.createElement() performs a few checks to help you write bug-
/*
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
*/

ReactDOM.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  
  element2,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
