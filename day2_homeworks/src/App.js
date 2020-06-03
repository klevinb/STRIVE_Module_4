import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap'
import Navbar from './components/MyNavbar'
import Footer from './components/MyFooter'
import Jumbotron from './components/Jumbotron'
import Latestrelease from './components/LatestReleases';

class App extends Component {
  
  state = {
    category: "history",
  }

  categoryPicker = (event) => {
    this.setState({
      category: event.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <Container>
          <Jumbotron />
          <select onChange={this.categoryPicker}>
            <option className="options" value="history">History</option>
            <option className="options" value="romance">Romance</option>
            <option className="options" value="horror">Horror</option>
            <option className="options" value="scifi">Scifi</option>
            <option className="options" value="fantasy">Fantasy</option>
          </select>
          <br></br>
          <Latestrelease category={this.state.category} />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
