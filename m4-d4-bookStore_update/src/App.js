import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap'
import Navbar from './components/MyNavbar'
import Footer from './components/MyFooter'
import BookDetails from './components/BookDetails'
import Register from './components/Register'
import Latestrelease from './components/LatestReleases';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Container>
            <Route path="/" exact component={Latestrelease}></Route>
          </Container>
          <Route path="/details/:category/:id" component={BookDetails}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
