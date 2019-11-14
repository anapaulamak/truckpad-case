import React, { Component } from 'react';
import { RegisterPage } from './pages/register/register.page'
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <RegisterPage />
      </div>
    );
  }
}

export default App;
