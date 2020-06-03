import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent'

const style = {color: 'red'}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello, I am Klevin</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent 
          text="This is a component I build it myslef!"
          isTrue={true}
          id={2}
          style={style}
        />
        <MyComponent 
          id={3}
        />
      </header>
    </div>
  );
}

export default App;
