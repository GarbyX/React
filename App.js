import React from 'react';
import Hi from './sayHi';
import Tweet from './Tweet';

function App() {

  const sayHi = () => {
    console.log("Hello Gabriel");
  }

  const counter = 0;

  return (
    <div>
      <h1>Hello React!</h1>
      <p>React website designed by Gabriel</p>  <br />

      <button onClick={sayHi}> Update </button> <br />  {/*f12 on browser*/}

      <h3> React uses Components with its logic. </h3> <br /> <hr /> <br />

        <div className="app">

          <Tweet name="Angel Gabriel"
            msg=' "I just want to design a good laravel website before God ask me to blow the Trumpet."' rets="5,142" />
          <Tweet name="Angel Michael"
            msg='"Mehn, nothing wey person no go see for coding."' rets="9,000" />
          <Tweet name="Angel Raphael"
            msg='"Make sure you put something inside your stomach before you start coding."' rets="200k" />
          <Tweet name="New Horizons"
            msg='"Dear Student, Advanced Web Dev class will not hold next week. we are sorry for the inconvenience."' rets="0" />

        </div>

      <hr />
      <button onClick=''>{counter}</button>
      <Hi />
    </div>

  );
}

export default App;


/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p> Edit <code>src/App.js</code> and save to reload. </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>

  );
}
export default App;
*/