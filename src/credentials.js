import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {

    componentDidMount(){
    }

    render(){
        const { data, type } = this.props;
        const MapperElement = data.map(item=>{
            if(type === "runningTruck"){
                return <Marker
                            position={{lat: item.lastWaypoint.lat, lng: item.lastWaypoint.lng}} 
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                            }}
                        />
            }
            if(type === "stoppedTruck"){
                return <Marker
                            position={{lat: item.lastWaypoint.lat, lng: item.lastWaypoint.lng}} 
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                            }}
                        />
            }
            if(type === "idleTruck"){
                return <Marker
                            position={{lat: item.lastWaypoint.lat, lng: item.lastWaypoint.lng}} 
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
                            }}
                        />
            }
            if(type === "errorTruck"){
                return <Marker
                            position={{lat: item.lastWaypoint.lat, lng: item.lastWaypoint.lng}} 
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                            }}
                        />
            }
            else{
                if(!!item.lastRunningState.truckRunningState){
                    return <Marker
                            position={{lat: item.lastWaypoint.lat, lng: item.lastWaypoint.lng}} 
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                            }}
                        />
                }        
                  else{
                    if((new Date(item.lastRunningState.stopStartTime).getHours()) > 4){
                        return <Marker
                            position={{lat: item.lastWaypoint.lat, lng: item.lastWaypoint.lng}} 
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                            }}
                        />
                    }
                    else if(item.lastWaypoint.ignitionOn){
                        return <Marker
                            position={{lat: item.lastWaypoint.lat, lng: item.lastWaypoint.lng}} 
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
                            }}
                        />
                    }
                    else{
                        return <Marker
                        position={{lat: item.lastWaypoint.lat, lng: item.lastWaypoint.lng}} 
                        icon={{
                            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                        }}
                        />
                    }
                 }
            }
        }
        )

        return(
            <div className="detail-wrapper">
                <div className="truck-detail">
                        {this.props.data.map(item =>{
                            return <div className="individual-truck-detail">
                                <h4>{item.truckNumber}</h4>
                                <h6>Stopped Since Last {new Date(item.lastRunningState.stopStartTime).getHours()} hours</h6>
                            </div>
                        })}
                </div>
                <div className="map-view">
                    <Map
                        google={this.props.google}
                        zoom={3}
                        onClick={this.onMapClicked}
                        initialCenter={{
                            lat: 30.868778228759766,
                            lng: 75.99723052978516
                          }}
                    >
                        {MapperElement}
                    
                    </Map>
                </div>
            </div>   
                )
    }

}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBF7d_5a5SVH2jBQqrFLeK1ZvmSTVj-jfY'),
    language: 'english',
  })(MapContainer)