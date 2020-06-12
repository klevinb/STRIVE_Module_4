import React from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap'
import SideBar from './components/SideBar'
import Content from './components/Content'
import Footer from './components/Footer'



function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row md={2} style={{ display: 'flex' }} >
          <SideBar />
          <Content />
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
