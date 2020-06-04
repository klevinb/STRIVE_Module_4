import React from 'react';
import './App.css';
import AlertMessage from './components/WarningSign'
import Badge from './components/MyBadge'

function App() {
  return (
    <div className="App">
      <AlertMessage text="This is an alert!" />
      <Badge color="warning" text="KB" />
    </div>
  );
}

export default App;
