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
/*
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
*/

//Lists and Keys +++++++++++++++++++++++++++++++++++++++++++++++
// keys only use for array
/*
function NumberList(props) {
  const numbers = props.numbers;
  // transform array to list of elements 
  const listItems = numbers.map((number)=> 
    <li key={number.toString()}>{number}</li>
    // if without adding key warning pop out
    // Keys to identify which itmes has changed or added/removed
    // keys should be given to elements inside the array to give 
    //    elements a stable identity
    // pick a key can be a string that uniquely identify a 
    //    list item amoing its siblings, or use ID from your data as keys
  );  
  // rendering multiple components
  return (
  <ul>{listItems}</ul>
  );
}

const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
*/

// Extracting Components with Keys+++++++++++++++++++++++++++++++++++++
/*
function ListItem(props){
  // no nned specify keys here 
  return <li>{props.value}</li>
}

function NumberList(props){
  const numbers = props.numbers;
  // need to specify keys here inside the array
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
  );

  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1,2,3,4,5,7,8,9,10];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
*/

//Keys Must Only Be Unique Among Siblings+++++++++++++++++++++++++++

/*
function Blog(props){
  const sidebar = (
    <ul>{props.posts.map((post)=>
        <li key={post.id}>
          {post.title} + {post.content}
        </li>
        )}
    </ul>
  );
  //key used within array should be unique among their siblings
  //they dont need to be globally unique
  //can use the same keys when produce two different arrays
  const content = props.posts.map((post) => 
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
  );

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id:1, title: 'Hello world', content: 'Welcome to learning react'},
  {id:2, title: 'Installation', content: 'You can install React from npm.'}
];

ReactDOM.render(
  <Blog posts={posts}/>,
  document.getElementById('root')
)
*/

// Embedding map() in JSX+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// declare a separate listItems variable and included it in JSX

/*
function ListItem(props){
  return <li>{props.value}</li>
}

function NumberList(props){
  const Numbers=props.numbers;
  // JSX alllow embedding any expression in curly braces
  // so can inline the map() result
  return (
    <ul>
      {numbers.map((number)=>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );
}

const numbers = [1,2,3,4,5,7,8,9,10];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
*/
// Forms +++++++++++++++++++++++++++++++++++++++++++++++
// Conctrolled Components ===============================
/*
class NameForm extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handlechnage runs on every keystroke to update 
  // react state, the displayed value will update as user types
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('A name was submitted:' + this.state.value);
    event.preventDefault();
    //if without prevent Default the value will be cleared at form
  }

  // React component that renders a form also control 
  // what in the form on subsequenc user input
  // input form element whose value is controlled by react 
  // is called "controlled component"
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
  // value attribute is set on form element, 
  // displayed value will be this.state.value 
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
*/

// Textarea tag ++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
class EssayForm extends React.Component{
  constructor(props){
    super(props);
    //initially set the value
    this.state = {
      value: "please write an essay about your favourite DOM element"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    // textarea use value attribute instead
    // so a form use textarea cna be written very similar to a form that use a single line input
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <EssayForm />,
  document.getElementById('root')
);

*/

// the select tag ++++++++++++++++++++++++++++++++++++++++++++
/*
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    // initially set as coconut due to selected attribute
    this.state = {value: 'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    // freact use value attribute on root select tag for controlled component
    return (
      // select tag to create drop down list
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root')
);
*/

// Handling Multiple input ++++++++++++++++++++++++++++++++++++++++++

//When you need to handle multiple controlled input elements, 
//you can add a name attribute to each element and 
//let the handler function choose what to do based on the 
//value of event.target.name.
/*
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    //initially set input value
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    if(target.checked)
      alert(name + ":" + value + " from checkbox"); 
  }

  render() {
    // add is going check box and input tag
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
*/

// Lifting state up +++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
*/

//Adding second input ++++++++++++++++++++++++++++++++++++++++++++++
/*
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    //render <input> that let us enter temperature and 
    // keep value in this.state.temperature
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
*/

//Lifting state up +++++++++++++++++++++++++++++++++++++++++++++++++++++

const scaleNames = {
  c: 'Celcius',
  f: 'Fahrenheit'
};

function toCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFehrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

//call from 
function tryConvert(temperature, convert) {
  // convert is function either toCelcius or toFehrenheit
  // call from calculator then send to 
  // class TemperatureInput, onTemperatureChange
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if(props.celcius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

// temperatureInput components independetly keep their value in local state
class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }

    // when want to update its temperature, call this.props.onTemperatureChange
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
      //no special meaning to either Temperature or onTemperatureChange props 
      // by the parent Calculator component
      // it will handle the change by modify its own local state
      //then rerendering both inputs with new values
      // so send to handleCelsiusChange or handleFehrenheitChange 
    }

    //two inputs to be in sync with each other,
    //sharing state is accomplished by moving it up to 
    //closest common ancestor of components that need it
    // so remove local state from TemperatureInput to Calculator
    render(){
      //replace this.state.temperature to this.props.temperature
      //due to temperature is from parent as prop, so here no control over it
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature} onChange={this.handleChange} />
        </fieldset>
      );
    }
}

//calculator onw  shared state become "source of truth" 
//for current temprature  in both inputs
// so can instruct them both to have values that are consistent with each other
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFehrenheitChange = this.handleFehrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }
//props of both TemperatureInput components are coming from same parent Calculator
// two inputs will always be in sync
  handleCelsiusChange(temperature){
    this.setState({scale: 'c', temperature});
  }

  handleFehrenheitChange(temperature){
    this.setState({scale: 'f', temperature});
  }

  render() {
    // main control so use this.state.temperature
    // to store current input temperature and scale in its local satte
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFehrenheit) : temperature;
    //if celcius is set then fahrenheit will direct be temperature

  return (
      // send value to tempeiratureInput and Boilingverdict for satte comment
      // if enter 37 to celcius, state of calculator be 
      //  {  temperature: '37',  scale: 'c' }
      // if eneter 212 to fahrenheit, state of calculator be 
      // {  temperature: '212',   scale: 'f' }
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFehrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

serviceWorker.register();
