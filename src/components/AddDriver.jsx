 
import React from 'react';

export const AddDriver = props => {
  return (
    <form onSubmit={ props.addDriver }>
      <div className="form-group">
        <label>Nome</label>
        <input type="text" className="form-control" name="driverName" value={props.driverName} onChange={ props.handleInputChange}/>
      </div>
      <div className="form-group">
        <label>Telefone</label>
        <input type="text" className="form-control" name="driverPhone" value={props.driverPhone} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>Data de Nascimento</label>
        <input type="date" className="form-control" name="driverBirth" value={props.driverBirth} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>CNH</label>
        <input type="text" className="form-control" name="driverCnh" value={props.driverCnh} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>Tipo de CNH</label>
        <input type="text" className="form-control" name="driverCnhType" value={props.driverCnhType} onChange={ props.handleInputChange} />
      </div>
      <div className="form-group">
        <label>CPF</label>
        <input type="text" className="form-control" name="driverCpf" value={props.driverCpf} onChange={ props.handleInputChange} />
      </div>
      <button className="btn btn-success mt-2"> Adicionar Motorista </button>
    </form>
  )
}
