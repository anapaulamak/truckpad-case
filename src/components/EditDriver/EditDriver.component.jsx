import React from 'react';
import './EditDriver.styles.scss';

export const EditDriver = props => {
  return (
    <form className="form-edit-driver">
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
      <div>
        <button className="btn-action" onClick={ props.updateDriver } > Atualizar </button>
        <button className="btn-action" onClick={ props.cancelEditing } > Cancelar </button>
      </div>
      <span className="warn">*Preencher todos os campos acima</span>
    </form>
  )
}