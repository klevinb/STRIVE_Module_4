import React, { Component } from 'react';
import './App.css';
import AlertMessage from './components/WarningSign'
import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import Badge from './components/MyBadge'
import { Container, Row } from 'react-bootstrap'

const books = {
  history: require('./data/history.json')
}

class App extends Component {

  render() {

    return (
      < div className="App" >
        <Container className="mt-3">
          <span><b>Aler Component</b></span>
          <AlertMessage text="This is an alert!" />
          <span><b>Badge Component</b></span>
          <Badge color="warning" text="KB" />
          <span><b>Single Book Component</b></span>
          <SingleBook book={books.history.slice(0, 1)[0]} />
          <span><b>BookList Component + Search Feature</b></span>
          <BookList book={books.history.slice(0, 20)} />
        </Container>
      </div >
    );
  }
}

export default App;
