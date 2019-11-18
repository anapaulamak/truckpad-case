import React from 'react';
import './ListDrivers.styles.scss';
import EditIcon from '../../assets/pencil.svg';
import DeleteIcon from '../../assets/rubbish.svg'

export const DriverList = (props) => {
  return (  
    <table className="table-list-drivers">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Telefone</th>
          <th>Data de nascimento</th>
          <th>CPF</th>
          <th>CNH</th>
          <th>Tipo de CNH</th>
        </tr>
      </thead>
      <tbody>
        { 
          props.driverItems.length > 0 ? (
            props.driverItems.map((driverItem) => (
                <tr key={driverItem.id}>
                  <td>{ driverItem.driverName }</td>
                  <td>{ driverItem.driverPhone }</td>
                  <td>{ driverItem.driverBirth }</td>
                  <td>{ driverItem.driverCpf }</td>
                  <td>{ driverItem.driverCnh }</td>
                  <td>{ driverItem.driverCnhType }</td>

                  <td className="table-list-drivers-actions">
                    <button className="btn-action" onClick={() => props.editDriver(driverItem) }>
                      <img src={ EditIcon } alt="Editar"></img>
                    </button>
                    <button className="btn-action" onClick={() => props.deleteDriver(driverItem.id) }>
                      <img src={ DeleteIcon } alt="Deletar"></img>
                    </button>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td>Não há motoristas cadastrados</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}

