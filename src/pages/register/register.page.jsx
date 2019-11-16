import React, { useState } from 'react';
import './register.page.styles.scss';

export const RegisterPage = props => {
	const [driver, setDriver] = useState({
		page: 0,
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

	const handleTab = index => event => {
    setDriver({...driver, page: index});
  }

	const handleContent = () => {
		switch (driver.page) {
			case 0:
				return (
					<form className="UserRegister">
						<p>Nome</p>
						<input placeholder="nome"
									 className="input"
									 name="DriverName"
									 value={driver.DriverName}
									 onChange={handleOnChange}/>
	
						<p>CPF</p>
						<input placeholder="XXX.XXX.XXX-XX"
										className="input"
										name="DriverCpf"
										value={driver.DriverDpf}
										onChange={handleOnChange}/>
	
						<p>Telefone</p>
						<input placeholder="telefone"
										className="input"
										name="DriverPhone"
										value={driver.DriverPhone}
										onChange={handleOnChange}/>
	
						<p>Data de nascimento</p>
						<input placeholder="01/01/2001"
										className="input"
										name="DriverBirth"
										value={driver.DriverBirth}
										onChange={handleOnChange}/>
	
						<p>CNH</p>
						<input placeholder="numero cnh"
										className="input"
										name="DriverCnh"
										value={driver.DriverCnh}
										onChange={handleOnChange}/>
	
						<p>Tipo de CNH</p>
						<input placeholder="A"
										className="input"
										name="DriverCnhType"
										value={driver.DriverCnhType}
										onChange={handleOnChange}/>
	
					<button type="submit">Adicionar</button>
				</form>
				);
			case 1:
				return (
					<div className="UsersList">
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
						</tbody>
					</table>
				</div>
				)
		}
	}
	
  return (
    <React.Fragment>
			<div className="Nav">
				<ul>
					<li className={(driver.page === 0) ? "nav-item-active" : "nav-item"} onClick={handleTab(0)}>Novo Cadastro</li>
					<li className={(driver.page === 1) ? "nav-item-active" : "nav-item"}  onClick={handleTab(1)}>Cadastrados</li>
				</ul>
			</div>
			<div className="Content">
				{handleContent()}
			</div>
    </React.Fragment>
		)
	}