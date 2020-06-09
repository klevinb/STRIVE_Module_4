import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Menu from './components/Menu'
import Reservations from './components/Reservations'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DishDetails from './components/DishDetails'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavBar title="Strivestaurant" />
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/reservation" exact render={(props) => <Reservations {...props} />} />
          <Route path="/details/:id" component={DishDetails} />
        </Router>
      </>
    );
  }
}

export default App;