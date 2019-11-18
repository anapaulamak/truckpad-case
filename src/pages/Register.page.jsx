import React, { useState, useEffect} from 'react';
import axios from "axios";
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
    driverItems: [],
    editing: false,
    page:0,
  })

  useEffect(() => {
    axios
      .get('https://api.myjson.com/bins/1db9wi')
      .then(({ data }) => {
        setDriver({...driver, driverItems: data});
      });
  },[]);

 
  const handleInputChange = (event) => {
    setDriver({ ...driver, [event.target.name]: event.target.value });
  }

  const addDriver = (event) => {
    event.preventDefault();

    if(!driver.driverName || !driver.driverPhone || !driver.driverBirth || !driver.driverCnh || !driver.driverCnhType || !driver.driverCpf ) {
      document.querySelector('.warn').style.display = 'block';
    } else {
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

    if(!driver.driverName || !driver.driverPhone || !driver.driverBirth || !driver.driverCnh || !driver.driverCnhType || !driver.driverCpf ) {
      document.querySelector('.warn').style.display = 'block';
    } else {
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
