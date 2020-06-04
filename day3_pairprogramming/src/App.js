import React, { Component } from 'react';
import './App.css';
import AlertMessage from './components/WarningSign'
import SingleBook from './components/SingleBook'
import Badge from './components/MyBadge'

const books = {
  history: require('./data/history.json')
}

class App extends Component {

  render() {

    return (
      <div className="App" >
        <AlertMessage text="This is an alert!" />
        <Badge color="warning" text="KB" />
        <SingleBook book={books.history} />
      </div>
    );
  }
}

export default App;
