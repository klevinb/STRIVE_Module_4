import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <SideBar />
          <Content />
        </Row>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
