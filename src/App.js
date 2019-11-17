import React from 'react';
import { DriverList } from './components/DriverList';
import { AddDriver } from './components/AddDriver';
import { EditDriver } from './components/EditDriver';
import './App.scss';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
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
      editing: false
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteDriver= this.deleteDriver.bind(this);
    this.addDriver = this.addDriver.bind(this);
    this.editDriver = this.editDriver.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.updateDriver = this.updateDriver.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
 
    this.setState({
      [name]:value
    })
  }

  addDriver(event){
    event.preventDefault()

    if (!this.state.driverName) return;
    const driverItem = {
      id: this.state.driverItems.length + 1,
      driverId: this.state.driverItems.length + 1,
      driverName: this.state.driverName,
      driverPhone: this.state.driverPhone,
      driverBirth: this.state.driverBirth,
      driverCnh: this.state.driverCnh,
      driverCnhType: this.state.driverCnhType,
      driverCpf: this.state.driverCpf,
      status: this.state.status
    };

    this.setState({
      driverName: '',
      driverPhone: '',
      driverBirth: '',
      driverCnh: '',
      driverCnhType: '',
      driverCpf:'',
      driverItem: driverItem,
      driverItems: [...this.state.driverItems, driverItem]
    })
    console.log(this.state.driverItems);
  }

  deleteDriver(driverId) {
    const driverItems = this.state.driverItems.filter( item => item.driverId !== driverId );
    this.setState({driverItems: driverItems});
    if(this.state.editing === true) {
      window.location.reload();
    }
  }

  editDriver(driverItem) {
    this.setEditing(true);
    this.setState({
      driverName:driverItem.driverName,
      driverPhone:driverItem.driverPhone,
      driverBirth:driverItem.driverBirth,
      driverCnh:driverItem.driverCnh,
      driverCnhType:driverItem.driverCnhType,
      driverCnhType:driverItem.driverCnhType,
      driverItem: driverItem
    });
    console.log(driverItem);
  }

  setEditing(value) {
    if(typeof value !== 'boolean') { throw " This value must either be true or false"}
    this.setState({
      editing: value
    })
  }

  updateDriver(event) {
    event.preventDefault();
    const updatedName = this.state.driverName;
    const updatedPhone = this.state.driverPhone;
    const updatedBirth = this.state.driverBirth;
    const updatedCnh = this.state.driverCnh;
    const updatedCnhType = this.state.driverCnhType;
    const updatedCpf = this.state.driverCpf;

    const updatedDriverInfos = Object.assign({}, this.state.driverItem, {
      driverName: updatedName,
      driverPhone: updatedPhone,
      driverBirth: updatedBirth,
      driverCnh: updatedCnh,
      driverCnhType: updatedCnhType,
      driverCpf: updatedCpf,
    })
    const driverItems = this.state.driverItems.map((driverItem) => (driverItem.id === this.state.driverItem.id ? updatedDriverInfos : driverItem));
    this.setState({ driverName:'', driverPhone: '', driverBirth: '', driverCnh: '', driverCnhType: '', driverCpf: '', driverItems: driverItems});
  }

  render() {
    const { driverName, driverPhone, driverBirth, driverCnh, driverCnhType, driverCpf, driverItems, editing } = this.state;
      return (
        <div className="App">

          <div className="row App-main">
          { 
            editing  ? (
            <EditDriver 
             driverName={this.state.driverName}
             driverPhone={this.state.driverPhone}
             driverBirth={this.state.driverBirth}
             driverCnh={this.state.driverCnh}
             driverCnhType={this.state.driverCnhType}
             driverCpf={this.state.driverCpf}
             handleInputChange={this.handleInputChange}
             setEditing={this.setEditing}
             updateDriver={this.updateDriver}
            />
            ) : (
            <AddDriver
              driverName={this.state.driverName}
              driverPhone={this.state.driverPhone}
              driverBirth={this.state.driverBirth}
              driverCnh={this.state.driverCnh}
              driverCnhType={this.state.driverCnhType}
              driverCpf={this.state.driverCpf}
              handleInputChange={this.handleInputChange} 
              addDriver={this.addDriver}
            />
            )
          }
          </div>

          <div className="row App-main">
            <DriverList 
              driverItems= {driverItems} 
              deleteDriver={this.deleteDriver}
              editDriver={this.editDriver}
            />
          </div>
        </div>
      );
    }
}
export default App;
