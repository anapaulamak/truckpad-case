import React, { Component } from 'react';
// import logo from './logo.svg';
import { Input } from './components/input/input.component'
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Registro de motoristas</h1>
        <div className="UserRegister">
          <label>NOME</label>
          <Input placeholder="nome" inputClass="input"/>

          <label>TELEFONE</label>
          <Input placeholder="telefone" inputClass="input"/>

          <label>DATA DE NASCIMENTO</label>
          <Input placeholder="01/01/2001" inputClass="input"/>

          <label>CNH</label>
          <Input placeholder="numero cnh" inputClass="input"/>

          <label>TIPO DE CNH</label>
          <Input placeholder="A" inputClass="input"/>

          <label>CPF</label>
          <Input placeholder="XXX.XXX.XXX-XX" inputClass="input"/>
        </div>

      </div>
    );
  }
}

export default App;
