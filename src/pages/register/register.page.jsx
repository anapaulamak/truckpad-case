import React, { useState } from 'react';
import './register.page.styles.scss';
import { Input } from './../../components/input/input.component'

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

						<Input inputTitle="Nome"
									 placeholder="nome"
									 inputClass="input"
									 name="DriverName"
									 value={driver.DriverName}
									 onChange={handleOnChange}/>

						<Input inputTitle="CPF"
									 placeholder="XXX.XXX.XXX-XX"
									 inputClass="input"
								 	 name="DriverCpf"
									 value={driver.DriverDpf}
									 onChange={handleOnChange}/>
	
						<Input inputTitle="Telefone"
									 placeholder="telefone"
									 inputClass="input"
								 	 name="DriverPhone"
									 value={driver.DriverPhone}
									 onChange={handleOnChange}/>

						<Input inputTitle="Data de nascimento"
									 placeholder="01/01/2001"
									 inputClass="input"
									 name="DriverBirth"
									 value={driver.DriverBirth}
									 onChange={handleOnChange}/>

						<Input inputTitle="CNH"
						       placeholder="numero cnh"
									 inputClass="input"
									 name="DriverCnh"
									 value={driver.DriverCnh}
									 onChange={handleOnChange}/>
	
						<Input inputTitle="Tipo de CNH"
									 placeholder="A"
									 inputClass="input"
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
							<tr>
								<th>Nome</th>
								<th>Telefone</th>
								<th>Data de Nasc</th>
								<th>CNH</th>
								<th>Tipo de CNH</th>
								<th>CPF</th>
							</tr>
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