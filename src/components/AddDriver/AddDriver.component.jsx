 import React from 'react';
 import './AddDriver.styles.scss';

export const AddDriver = props => {
  return (
    <form onSubmit={ props.addDriver } className="form-add-driver">
      <div className="form-group">
        <label>Nome</label>
        <input type="text" name="driverName" value={props.driverName} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label>Telefone</label>
        <input type="text" name="driverPhone" value={props.driverPhone} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>Data de Nascimento</label>
        <input type="date" name="driverBirth" value={props.driverBirth} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>CNH</label>
        <input type="text" name="driverCnh" value={props.driverCnh} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>Tipo de CNH</label>
        <input type="text" name="driverCnhType" value={props.driverCnhType} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>CPF</label>
        <input type="text" name="driverCpf" value={props.driverCpf} onChange={ props.handleInputChange} />
      </div>
      <button className="btn-action"> Adicionar Motorista </button>
    </form>
  )
}
