import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap'
import Navbar from './components/MyNavbar'
import Footer from './components/MyFooter'
import Jumbotron from './components/Jumbotron'
import Latestrelease from './components/LatestReleases';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Container>
          <Jumbotron />
          <Latestrelease />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
