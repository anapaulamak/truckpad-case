import React, { Component } from 'react';
import './App.scss';
import { RegisterPage } from './pages/register/register.page'

class App extends Component {
  render() {
    return (
      <div className="App">
          <RegisterPage />
      </div>
    )
  }
}

export default App;
