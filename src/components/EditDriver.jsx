import React from 'react'

export const EditDriver = props => {
  return (
    <form>
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
      <button onClick={ props.updateDriver } className="btn btn-success mt-2"> Update </button>
      <button onClick={() => props.setEditing(false)} className="btn btn-info mt-2">Cancel</button>
    </form>
  )
}