import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//“props” (which stands for properties) object argument with data and returns a React element.
function Welcome(props) {
  // props for read only to 
  return <h1>Hello, {props.name}</h1>;
}

function App1() {
  return (
    <div>
      <Welcome name="Sara"/>
      <Welcome name="Toufu"/>
      <Welcome name="Pang"/>
    </div>
  )
}

function formatDate(date){
  return date.toLocaleDateString();
}

function Comment(props){
  return ( // composing components 
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

function Avatar(props){
  return ( //split the above function for extract components
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function UserInfo(props) {
  return ( // avatar function is embedded in UserInfo for extract components
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="userInfo.name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment2(props){
  return ( //Userinfo is embedded in Comment2 for extract component
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy training React',
  author: {
    name: 'terry pang',
    avatarUrl: 'https://placekitten.com/g/64/64'
  },
};

// the sara name will send to prop to fit the html
const element3 = <App1 />
const element4 = 
  <Comment2 
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />

ReactDOM.render(
    element4,
    document.getElementById('root')
);

serviceWorker.register();
