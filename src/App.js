import React, { Component } from 'react';
// import logo from './logo.svg';
import { Input } from './components/input/input.component'
import './style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">        
        <div className="UserRegister">
          <h1>Registro de motoristas</h1>
          <label>Nome</label>
          <Input placeholder="nome" inputClass="input"/>

          <label>Telefone</label>
          <Input placeholder="telefone" inputClass="input"/>

          <label>Data de nascimento</label>
          <Input placeholder="01/01/2001" inputClass="input"/>

          <label>CNH</label>
          <Input placeholder="numero cnh" inputClass="input"/>

          <label>Tipo de CNH</label>
          <Input placeholder="A" inputClass="input"/>

          <label>CPF</label>
          <Input placeholder="XXX.XXX.XXX-XX" inputClass="input"/>
        </div>
        
        <div className="UsersList">
          <h1>Lista de Motoristas</h1>
          <table>
            <thead>
              <td>Nome</td>
              <td>Telefone</td>
              <td>Data de Nasc</td>
              <td>CNH</td>
              <td>Tipo de CNH</td>
              <td>CPF</td>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
