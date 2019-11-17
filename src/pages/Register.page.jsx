import React, { useState } from 'react';
import { DriverList } from '../components/ListDrivers/ListDrivers.component';
import { AddDriver } from '../components/AddDriver/AddDriver.component';
import { EditDriver } from '../components/EditDriver/EditDriver.component';
import './Register.styles.scss';

function RegisterPage (props) {
  const [driver, setDriver] = useState({
    id: null,
    driverId: 1,
    driverName: '',
    driverPhone: '',
    driverBirth: '',
    driverCnh: '',
    driverCnhType: '',
    driverCpf:'',
    status: false,
    driverItem: {},
    driverItems: [
      {
        id: '1',
        driverId: '1',
        driverName: 'Pouca Tripa',
        driverPhone: '11999999999',
        driverBirth: '1976-09-22',
        driverCpf: '11111111111',
        driverCnh: '22222222222',
        driverCnhType: 'B'
      },
      {
        id: '2',
        driverId: '2',
        driverName: 'João de Barro',
        driverPhone: '11888888888',
        driverBirth: '1980-03-10',
        driverCpf: '22222222222',
        driverCnh: '33333333333',
        driverCnhType: 'A,B'
      },
      {
        id: '3',
        driverId: '3',
        driverName: 'Maria de Silva',
        driverPhone: '11777777777',
        driverBirth: '1985-07-17',
        driverCpf: '44444444444',
        driverCnh: '33333333333',
        driverCnhType: 'A,B,C'
      },
      {
        id: '4',
        driverId: '4',
        driverName: 'Joana Alves',
        driverPhone: '11666666666',
        driverBirth: '1988-01-03',
        driverCpf: '5555555555',
        driverCnh: '44444444444',
        driverCnhType: 'D'
      },
    ],
    editing: false,
    page:0
  })

  const handleInputChange = (event) => {
    setDriver({ ...driver, [event.target.name]: event.target.value });
  }

  const addDriver = (event) => {
    event.preventDefault()

    if (!driver.driverName) return;
    const driverItem = {
      id: driver.driverItems.length + 1,
      driverId: driver.driverItems.length + 1,
      driverName: driver.driverName,
      driverPhone: driver.driverPhone,
      driverBirth: driver.driverBirth,
      driverCnh: driver.driverCnh,
      driverCnhType: driver.driverCnhType,
      driverCpf: driver.driverCpf,
      status: driver.status,
    };
    setDriver({
      ...driver,
      driverName: '',
      driverPhone: '',
      driverBirth: '',
      driverCnh: '',
      driverCnhType: '',
      driverCpf:'',
      driverItem: driverItem,
      driverItems: [...driver.driverItems, driverItem],
      page: 1
    })
  }

  const deleteDriver = (driverId) => {
    const driverItems = driver.driverItems.filter( item => item.driverId !== driverId );
    setDriver({...driver, driverItems: driverItems});
  }

  const editDriver = (driverItem) => {
    setDriver({
      ...driver,
      driverName: driverItem.driverName,
      driverPhone: driverItem.driverPhone,
      driverBirth: driverItem.driverBirth,
      driverCnh: driverItem.driverCnh,
      driverCnhType: driverItem.driverCnhType,
      driverCpf: driverItem.driverCpf,
      driverItem: driverItem,
      page: 0,
      editing: true
    })
  }
  
  const cancelEditing = (event) => {
    setDriver({
      ...driver,
      driverName: '',
      driverPhone: '',
      driverBirth: '',
      driverCnh: '',
      driverCnhType: '',
      driverCpf:'',
      editing: false
    })
  }

  const updateDriver = (event) => {
    event.preventDefault();
    const updatedName = driver.driverName;
    const updatedPhone = driver.driverPhone;
    const updatedBirth = driver.driverBirth;
    const updatedCnh = driver.driverCnh;
    const updatedCnhType = driver.driverCnhType;
    const updatedCpf = driver.driverCpf;

    const updatedDriverInfos = Object.assign({}, driver.driverItem, {
      driverName: updatedName,
      driverPhone: updatedPhone,
      driverBirth: updatedBirth,
      driverCnh: updatedCnh,
      driverCnhType: updatedCnhType,
      driverCpf: updatedCpf,
    })
    const driverItems = driver.driverItems.map((driverItem) => (driverItem.id === driver.driverItem.id ? updatedDriverInfos : driverItem));
    setDriver({ 
      ...driver,
      driverName:'',
      driverPhone: '',
      driverBirth: '',
      driverCnh: '',
      driverCnhType: '',
      driverCpf: '',
      driverItems: driverItems,
      page: 1
    });
  }

  const handleTab = index => event => {
    setDriver({...driver, page:index})
  }

  const handlePage = () => {
    switch(driver.page) {
      case 0:
        return (
          <div className="App-main">
          { 
            driver.editing ? (
            <EditDriver
              driverName={ driver.driverName }
              driverPhone={ driver.driverPhone }
              driverBirth={ driver.driverBirth }
              driverCnh={ driver.driverCnh }
              driverCnhType={ driver.driverCnhType }
              driverCpf={ driver.driverCpf }
              handleInputChange={ handleInputChange }
              cancelEditing={ cancelEditing }
              updateDriver={ updateDriver }
            />
            ) : (
            <AddDriver
              driverName={ driver.driverName }
              driverPhone={ driver.driverPhone }
              driverBirth={ driver.driverBirth }
              driverCnh={ driver.driverCnh }
              driverCnhType={ driver.driverCnhType }
              driverCpf={ driver.driverCpf }
              handleInputChange={ handleInputChange } 
              addDriver={ addDriver }
            />
            )
          }
          </div>
        );
      case 1:
        return (
          <div className="App-main">
          <DriverList 
            driverItems= { driver.driverItems } 
            deleteDriver={ deleteDriver }
            editDriver={ editDriver }
          />
        </div>
        );
      default:
      break;
    }
  }

  return (
    <div className="RegisterPage">
      <div className="RegisterPage-nav">
        <ul>
          <li className={(driver.page === 0) ? "link-active" : ""} onClick={handleTab(0)}>Cadastro</li>
          <li className={(driver.page === 1) ? "link-active" : ""} onClick={handleTab(1)}>Lista</li>
        </ul>
      </div>

      <div className="RegisterPage-content">
        { handlePage() }
      </div>
    </div>
  );
}
export default RegisterPage;
