import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './credentials';
import axios from 'axios';
import './style.scss';
import { Multiselect } from 'multiselect-react-dropdown';
import Loader from './loader'

class App extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.multiselectRef = React.createRef();
    this.state = {
      runningTrucks : [],
      stoppedTrucks: [],
      idleTrucks: [],
      errorTrucks: [],
      allTruck: [],
      data : [],
      type: "",
      truckNumberArray : [],
      data1: [],
      selectedValue :[],
      isLoading: true,
      active: true,
      activeRunning: false,
      activeStopped: false,
      activeIdle: false,
      activeError: false,
    };
}

  componentDidMount(){
    axios.get('https://api.mystral.in/tt/mobile/logistics/searchTrucks?auth-company=PCH&companyId=33&deactivated=false&key=g2qb5jvucg7j8skpu5q7ria0mu&q-expand=true&q-include=lastRunningState,lastWaypoint')
      .then((response) => {
        const {data: { data }} = response;
        this.setState({data});
        this.setState({
          truckNumberArray : data.map(item=>item.truckNumber)
        })
        data.map(item =>{
          if(!!item.lastRunningState.truckRunningState){
            let updatedrunningTrucks = [];
             updatedrunningTrucks = [...this.state.runningTrucks]
             updatedrunningTrucks.push(item)
              this.setState({
                runningTrucks: updatedrunningTrucks
              })
          }
          else{
            if((new Date(item.lastRunningState.stopStartTime).getHours()) > 4){
              let updatederrorTrucks = [];
              updatederrorTrucks = [...this.state.errorTrucks]
              updatederrorTrucks.push(item)
                this.setState({
                  errorTrucks: updatederrorTrucks
                })
            }
            else if(item.lastWaypoint.ignitionOn){
              let updatedidleTrucks = [];
              updatedidleTrucks = [...this.state.idleTrucks]
              updatedidleTrucks.push(item)
               this.setState({
                 idleTrucks: updatedidleTrucks
               })
            }
            else{
              this.setState({
                stoppedTruckes : item
              })
              let updatedstoppedTrucks = [];
              updatedstoppedTrucks = [...this.state.stoppedTrucks]
              updatedstoppedTrucks.push(item)
               this.setState({
                 stoppedTrucks: updatedstoppedTrucks
               })
            }
            
          }
        })
        this.setState({isLoading : false})
      })
      .catch(function (error) {
        console.log('error goes here====>>',error);
      })
  };

  handleAllTruck = (value) =>{
    this.setState({data1: []});
    this.multiselectRef.current.resetSelectedValues();
    const {idleTrucks, runningTrucks, stoppedTrucks, errorTrucks ,activeStopped, allTruck, active,activeError, activeIdle, activeRunning} = this.state;
    if(value === "allTruck"){
      let UpdatedTrucks = [];
      UpdatedTrucks = Array.prototype.concat.apply([], [idleTrucks, runningTrucks, stoppedTrucks,errorTrucks ]);
      this.setState({data: UpdatedTrucks,
                    type: "allTruck",
                    active: !active,
                    activeRunning:false,
                    activeStopped: false,
                    activeIdle: false,
                    activeError: false
                    });
    }
    if(value=== "runningTruck"){
      this.setState({data: runningTrucks,
                     type: "runningTruck",
                      activeRunning: !activeRunning,
                      active: false,
                      activeStopped: false,
                      activeIdle: false,
                      activeError: false});
      
    }
    if(value=== "stoppedTruck"){
      this.setState({data: stoppedTrucks, type: "stoppedTruck",
             activeStopped:!activeStopped,
             active: false,
             activeRunning:false,
             activeIdle: false,
             activeError: false});
    }
    if(value=== "idleTruck"){
      this.setState({data: idleTrucks, type:"idleTruck",
       activeIdle: !activeIdle,
       active: false,
       activeRunning:false,
       activeStopped: false,
       activeError: false});
    }
    if(value=== "errorTruck"){
      this.setState({data: errorTrucks, type: "errorTruck",
       activeError: !activeError,
       active: false,
       activeRunning:false,
       activeStopped: false,
       activeIdle: false});
    }
  };

  onSelect = (selectedList, selectedItem) =>{
    const { data1, data } = this.state;
    let updatedData = [...data1];
    data.map(item => {if(item.truckNumber === selectedItem){
      updatedData.push(item);
    }});
    this.setState({
      data1: updatedData
    });
  };

  onRemove = (selectedList, removedItem) =>{
    const {data1, data} = this.state;
    let updatedData = [...data1];
    data1.map((item,index)=>{if(item.truckNumber === removedItem){
      updatedData.splice(index,1);
    }});
    this.setState({
      data1: updatedData
    })
  }


  render(){
    const { runningTrucks,errorTrucks,activeStopped, allTruck,activeError, activeIdle, activeRunning, isLoading, stoppedTrucks, idleTrucks, data, data1, type, truckNumberArray, active } = this.state; 
    return (
      <>
    {isLoading ? <Loader /> :
        (<div className="main-component-wrapper">
          <div className="main-component">
              <div className="navbar">
                  <div onClick = {() =>this.handleAllTruck("allTruck")} className={`${active ? 'active': ''}`}>
                    <h4>Total Trucks</h4>
                    <p>{runningTrucks.length+stoppedTrucks.length+idleTrucks.length+errorTrucks.length}</p>
                  </div>
                  <div onClick = {() =>this.handleAllTruck("runningTruck")} className={`${activeRunning ? 'active': ''}`}>
                    <h4>Running Trucks</h4>
                    {runningTrucks &&  <p>{runningTrucks.length}</p>}
                  </div>
                  <div onClick = {() =>this.handleAllTruck("stoppedTruck")} className={`${activeStopped ? 'active': ''}`}>
                    <h4>Stopped Trucks</h4>
                      <p>{stoppedTrucks.length}</p>
                  </div>
                  <div onClick = {() =>this.handleAllTruck("idleTruck")} className={`${activeIdle ? 'active': ''}`}>
                    <h4>Idle Trucks</h4>
                    <p>{idleTrucks.length}</p>
                  </div>
                  <div onClick = {() =>this.handleAllTruck("errorTruck")} className={`${activeError ? 'active': ''}`}>
                    <h4>Error Trucks</h4>
                    <p>{errorTrucks.length}</p>
                  </div>
                  <div className="tracker">
                  <Multiselect
                    options={truckNumberArray} 
                    // selectedValues={selectedValue}
                    onSelect={this.onSelect}
                    onRemove={this.onRemove} 
                    displayValue="name"
                    isObject = {false}
                    ref={this.multiselectRef}
                  />
                  </div>
              </div>
              <div>
                {data1.length ?<MapContainer data = {data1}/>:
                  <MapContainer data = {data}  type = {type} /> }
              </div>    
          </div>
        </div>)}
        </> 
    );
  }
};

export default App;
