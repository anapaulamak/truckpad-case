 import React from 'react';
 import './AddDriver.styles.scss';

export const AddDriver = props => {
  return (
    <form onSubmit={ props.addDriver } className="form-add-driver">
      <div className="form-group">
        <label>Nome</label>
        <input 
          type="text"
          name="driverName"
          placeholder="nome"
          value={props.driverName}
          onChange={ props.handleInputChange}
          className="input-driver-name"
        />
      </div>
      <div className="form-group">
        <label>Telefone</label>
        <input
          type="text"
          name="driverPhone"
          placeholder="telefone"
          value={props.driverPhone}
          onChange={ props.handleInputChange}
          className="input-driver-phone"
        />
      </div>
      <div className="form-group">
        <label>Data de Nascimento</label>
        <input
          type="type"
          name="driverBirth"
          placeholder="DD/MM/AAAA"
          value={props.driverBirth}
          onChange={ props.handleInputChange}
          className="input-driver-birth"
        />
      </div>
      <div className="form-group">
        <label>CNH</label>
        <input
          type="text"
          name="driverCnh"
          placeholder="XXXXXXXXXXX"
          value={props.driverCnh}
          onChange={ props.handleInputChange}
          className="input-driver-cnh"
        />
      </div>
      <div className="form-group">
        <label>Tipo de CNH</label>
        <input
          type="text"
          name="driverCnhType"
          placeholder="A, B"
          value={props.driverCnhType}
          onChange={ props.handleInputChange}
          className="input-driver-cnh-type"
        />
      </div>
      <div className="form-group">
        <label>CPF</label>
        <input
          type="text"
          name="driverCpf"
          placeholder="XXX.XXX.XXX-XX"
          value={props.driverCpf}
          onChange={ props.handleInputChange}
          className="input-driver-cpf"
          
        />
      </div>
      <button className="btn-action"> Adicionar </button>
      <span className="warn">*Preencher todos os campos acima</span>
    </form>
  )
}
