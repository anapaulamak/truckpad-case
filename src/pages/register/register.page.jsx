import React, { useState } from 'react';
import { Input } from '../../components/input/input.component'
import './register.page.styles.css';

export const RegisterPage = props => {
	const [driver, setDriver] = useState({
		DriverName:'',
		DriverPhone:'',
		DriverCpf:'',
		DriverBirth:'',
		DriverCnh:'',
		DriverCnhType:''
	});

  const handleOnChange = event => {
    setDriver({ ...driver, [event.target.name]: event.target.value });
	}
	
  return (
    <React.Fragment>
        <div className="UserRegister">
          <h1>Registro de motoristas</h1>
            <p>Nome</p>
            <Input
              placeholder="nome"
              inputClass="input"
              name="DriverName"
							value={driver.DriverName}
							onChange={handleOnChange}/>

            <p>CPF</p>
            <Input
							placeholder="XXX.XXX.XXX-XX"
							inputClass="input"
							name="DriverCpf"
							value={driver.DriverDpf}
							onChange={handleOnChange}/>

            <p>Telefone</p>
            <Input
							placeholder="telefone"
							inputClass="input"
							name="DriverPhone"
							value={driver.DriverPhone}
							onChange={handleOnChange}/>

            <p>Data de nascimento</p>
            <Input
							placeholder="01/01/2001"
							inputClass="input"
							name="DriverBirth"
							value={driver.DriverBirth}
							onChange={handleOnChange}/>

            <p>CNH</p>
            <Input
							placeholder="numero cnh"
							inputClass="input"
							name="DriverCnh"
							value={driver.DriverCnh}
							onChange={handleOnChange}/>

            <p>Tipo de CNH</p>
            <Input
							placeholder="A"
							inputClass="input"
							name="DriverCnhType"
							value={driver.DriverCnhType}
							onChange={handleOnChange}/>

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
								<td>{driver.DriverName}</td>
								<td>{driver.DriverPhone}</td>
								<td>{driver.DriverBirth}</td>
								<td>{driver.DriverCnh}</td>
								<td>{driver.DriverCnhType}</td>
								<td>{driver.DriverCpf}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </React.Fragment>
  );
}