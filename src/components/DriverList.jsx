import React from 'react';

export const DriverList = (props) => {
    return (  
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Data de nascimento</th>
            <th>CNH</th>
            <th>Tipo de CNH</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
            { 
              props.driverItems.length > 0 ? (
                props.driverItems.map((driverItem) => (
                    <tr key={driverItem.id}>
                      <td>{ driverItem.driverId }</td>
                      <td>{ driverItem.driverName }</td>
                      <td>{ driverItem.driverPhone }</td>
                      <td>{ driverItem.driverBirth }</td>
                      <td>{ driverItem.driverCpf }</td>
                      <td>{ driverItem.driverCnh }</td>
                      <td>{ driverItem.driverCnhType }</td>

                      <td>
                        <button className="btn btn-primary ml-2" onClick={() => props.editDriver(driverItem) }>Edit</button>
                        <button className="btn btn-danger ml-2" onClick={() => props.deleteDriver(driverItem.id) }>Delete</button>
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

