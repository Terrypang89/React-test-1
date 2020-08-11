import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

//Components and Props++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
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
*/

//State and LifeStyles +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleDateString()}</h2>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 2000);

function Clock(props){
  return (
    <div>
      <h1>Hello, world baba!</h1>
      <h2>It is {props.date.toLocaleDateString()}.</h2>
    </div>
  )
}

function tick1(){
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
  );
}

setInterval(tick1, 5000);

//To make clock update itself convert function to class

//define as class rather than function 
class Clock2 extends React.Component{
  render(){
    return (
      <div>
        <h1>Hellow, world</h1>
        <h2>It is {this.props.date.toLocaleDateString()}.</h2>
      </div>
    );
  }
}

function tick2(){
  ReactDOM.render(
    <Clock2 date={new Date()}/>,
    document.getElementById('root')
  );
}

setInterval(tick2, 7000);

//Adding Local State to a Class

class Clock3 extends React.Component{
  // add class constructor that assign initial this.state
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; // initially set date value to state
  }
  //replace props to state
  render(){
    return (
      <div>
        <h1>testing Adding Local State to a Class </h1>
        <h2>It is {this.state.date.toLocaleDateString()}.</h2>
      </div>
    );
  }
}

function tick3(){
  // Clock3 class soesnt need to assign value to props as contructor will do
  ReactDOM.render(
    <Clock3 />,
    document.getElementById('root')
  );
}

setInterval(tick3, 9000);

//Adding Lifecycle Methods to a Class++++++++++++++++++++++++++++

//In applications with many components, 
//it’s very important to free up resources taken by the components 
//when they are destroyed.

//now  set up a timer whenever the Clock is rendered to the DOM for the first time.
// This is called “mounting” in React.

//then clear that timer whenever the DOM produced by the Clock is removed. 
//This is called “unmounting” in React.

class Clock4 extends React.Component{
  // add class constructor that assign initial this.state
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; // initially set date value to state
  }

  // add lifecycle Method
  //this runs after the component output has been rendered to the DOM.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 11000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  ticks() {
    this.setInterval({date: new Date()});
  }

  //replace props to state
  render(){
    return (
      <div>
        <h1>testing Adding Local State to a Class </h1>
        <h2>It is {this.state.date.toLocaleDateString()}.</h2>
      </div>
    );
  }
  //after constructor call to render(), 
  //React updates DOM to match Clock4 render output

  //When the Clock output is inserted in the DOM, 
  //React calls the componentDidMount() lifecycle method. 
  //Clock component asks the browser to set up a timer to call ticks()

  //in browser when call Ticks(), Clock component schedules a UI update by 
  //calling setState() with an object containing the current time. 

  //with setState() call, React knows the state has changed, 
  //and calls the render() method again to learn what should be 
  //on the screen. 

  //then this.state.date in the render() method will be different, 
  //and so the render output will include the updated time. 
  //React updates the DOM accordingly.

  //Clock component is ever removed from the DOM, 
  //React calls the componentWillUnmount() lifecycle method
}

ReactDOM.render(
  <Clock4 />,
  document.getElementById('root')
);

//The Data Flows Down+++++++++++++++++++++++++++++++++++

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleDateString()},</h2>;
}

class Clock5 extends React.Component{
  // add class constructor that assign initial this.state
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; 
    // initially set date value to state
  }

  // add lifecycle Method
  //this runs after the component output has been rendered to the DOM.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 14000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  ticks() {
    this.setState((state,props) => {date: new Date()});
  }

  //replace props to state
  render(){
    return (
      <div>
        <h1>testing The Data Flows Down </h1>
        <FormattedDate date={this.state.date}/>
      </div>
    );
  }
}

function App5() {
  return (
    <div>
      <Clock5 />
      <Clock5 />
      <Clock5 />
    </div>
  )
}

ReactDOM.render(
  <App5 />,
  document.getElementById('root')
);
*/
//Handling Events+++++++++++++++++++++++++++++++++++++++++++
/*
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    //bind the function handleClick to class Toggle
    this.handleClick = this.handleClick.bind(this);
    //in js, class method not bounds by default
    //this will be undefined when function is called
  }

  
  handleClick(e) {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    //cannot return false to prevent default behavior in React
    // must use preventDefault()
    e.preventDefault();
    alert('The link was clicked.');
  }
// to replace the bind function to class
//  handleClick = () => {
//    console.log("this is", this);
//  }

  render() {
    return (
      //in js OnClick="handleClick()"
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'OFF'}
      </button>
      // to replace the bind function to class
      //<button onClick={() => this.handleClick()}>
      //  Click me
      //</button>
      //

      // to passing arguments to event handlers
      //<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
      //<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
      //
    );
  }
}

ReactDOM.render (
  <Toggle />,
  document.getElementById('root')
);
*/

// Conditional Greeting++++++++++++++++++++++++++++++++++++++++
/*
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props){
  return <h1>Please SIgn Up</h1>
}

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />;
  } 
  return <GuestGreeting />;
}

ReactDOM.render(
  // based on isLoggedIn condition true or false
  <Greeting isLoggedIn={true} />,
  document.getElementById('root')
)
*/
//Element Variable+++++++++++++++++++++++++++++++

/*
//create stateful components
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
    //set the state to true and bring to LoginButton
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
    //set the state to false and bring to LogoutButton
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    //// use variable to store elements 
    //sp conditionally render a part of components while 
    //the rest of output doesnt change
    //either render Loutout or login
    if (isLoggedIn) {
      // to LogoutButton function with parameter this.handleLogoutClick
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      // bring the isLoggedIn value to Greeting function
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
      // rendering button with button value display
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    // state Login Button is clicked
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    //state logout button is clicked
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
*/

//Inline If with Logical && Operator++++++++++++++++++++++++++++++++

/*
//wrapping emded expression in curly braces
// include && operator and handy for conditionally include elements
function Mailbox(props){
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && 
        <h2>
          You have 
          {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

//add 3 messages in array
const messages = ['React', 'Re:React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
)
*/

//Inline If-Else with Conditional Operator++++++++++++++++++++++++++++++++
//Preventing Component from Rendering+++++++++++++++++++++++++++++++++
//using another conditional rendering inline
//JavaScript conditional operator condition ? true : false.
function WarningBanner(props) {
  // if props is false will return nullm so wont rendering
  if (!props.warn) {
    return null;
  }

  //if true then rendering
  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    // set if true become false, false become true
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      //using js conditional 
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

serviceWorker.register();
