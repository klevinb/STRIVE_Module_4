import React from 'react';
import './App.css';
import Snippet from './Snippet'

// Today's methods :
// Constructor gets executed as the very first thing in the class initialization
// Render will accurr at every state/props change
// ComponentDidMount gets executed just once for every mounting, perfect place for AJAC
// ComponentDidUpdate gets executed an instant before the component is going to be removed
// ComponentWillUnMount 

class App extends React.Component {

  constructor(props) {
    super(props)
    console.log("MAIN COUNSTRUCTOR, MOUNTING!")
    // bindings

    // this.changeState = this.changeState.bind(this)
  }

  state = {
    test: '',
    show: true
  }

  componentDidMount = () => {
    console.log("COMPONENTDIDMOUNT METHOD")
    // Perfect for Async calls
    // let resp = await

  }

  changeState = () => {
    this.setState({
      test: 'something',
      show: !this.state.show
    });
  }

  componentDidUpdate = () => {
    console.log("Component did update!")
    if (this.state.test !== 'something else') {
      this.setState({
        test: this.state.test + ' else'
      });
    }
  }

  render() {
    console.log("RENDER METHOD")
    return (
      <div className="App">
        <header className="App-header">
          <button type="button" onClick={this.changeState}>PressMe</button>
          {this.state.show && <Snippet title="HELLO" />}
        </header>
      </div>
    );
  }

}

export default App;
