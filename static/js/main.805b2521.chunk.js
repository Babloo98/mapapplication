(this.webpackJsonpmapapp=this.webpackJsonpmapapp||[]).push([[0],{23:function(e,t,a){e.exports=a(64)},28:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),i=(a(28),a(3)),o=a(5),s=a(6),u=a(8),p=a(7),m=(a(29),a(30),a(2)),d=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.data,a=e.type,n=t.map((function(e){return"runningTruck"===a?r.a.createElement(m.Marker,{position:{lat:e.lastWaypoint.lat,lng:e.lastWaypoint.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}}):"stoppedTruck"===a?r.a.createElement(m.Marker,{position:{lat:e.lastWaypoint.lat,lng:e.lastWaypoint.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}}):"idleTruck"===a?r.a.createElement(m.Marker,{position:{lat:e.lastWaypoint.lat,lng:e.lastWaypoint.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}}):"errorTruck"===a?r.a.createElement(m.Marker,{position:{lat:e.lastWaypoint.lat,lng:e.lastWaypoint.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}}):e.lastRunningState.truckRunningState?r.a.createElement(m.Marker,{position:{lat:e.lastWaypoint.lat,lng:e.lastWaypoint.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}}):new Date(e.lastRunningState.stopStartTime).getHours()>4?r.a.createElement(m.Marker,{position:{lat:e.lastWaypoint.lat,lng:e.lastWaypoint.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}}):e.lastWaypoint.ignitionOn?r.a.createElement(m.Marker,{position:{lat:e.lastWaypoint.lat,lng:e.lastWaypoint.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}}):r.a.createElement(m.Marker,{position:{lat:e.lastWaypoint.lat,lng:e.lastWaypoint.lng},icon:{url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}})}));return r.a.createElement("div",{className:"detail-wrapper"},r.a.createElement("div",{className:"truck-detail"},this.props.data.map((function(e){return r.a.createElement("div",{className:"individual-truck-detail"},r.a.createElement("h4",null,e.truckNumber),r.a.createElement("h6",null,"Stopped Since Last ",new Date(e.lastRunningState.stopStartTime).getHours()," hours"))}))),r.a.createElement("div",{className:"map-view"},r.a.createElement(m.Map,{google:this.props.google,zoom:3,onClick:this.onMapClicked,initialCenter:{lat:30.868778228759766,lng:75.99723052978516}},n)))}}]),a}(r.a.Component),g=Object(m.GoogleApiWrapper)({apiKey:"AIzaSyBF7d_5a5SVH2jBQqrFLeK1ZvmSTVj-jfY",language:"english"})(d),v=a(21),k=a.n(v),h=(a(63),a(22)),T=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("img",{src:"https://i.pinimg.com/originals/78/e8/26/78e826ca1b9351214dfdd5e47f7e2024.gif"}))}}]),a}(r.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleAllTruck=function(e){n.setState({data1:[]}),n.multiselectRef.current.resetSelectedValues();var t=n.state,a=t.idleTrucks,r=t.runningTrucks,c=t.stoppedTrucks,l=t.errorTrucks,i=t.activeStopped,o=(t.allTruck,t.active),s=t.activeError,u=t.activeIdle,p=t.activeRunning;if("allTruck"===e){var m;m=Array.prototype.concat.apply([],[a,r,c,l]),n.setState({data:m,type:"allTruck",active:!o,activeRunning:!1,activeStopped:!1,activeIdle:!1,activeError:!1})}"runningTruck"===e&&n.setState({data:r,type:"runningTruck",activeRunning:!p,active:!1,activeStopped:!1,activeIdle:!1,activeError:!1}),"stoppedTruck"===e&&n.setState({data:c,type:"stoppedTruck",activeStopped:!i,active:!1,activeRunning:!1,activeIdle:!1,activeError:!1}),"idleTruck"===e&&n.setState({data:a,type:"idleTruck",activeIdle:!u,active:!1,activeRunning:!1,activeStopped:!1,activeError:!1}),"errorTruck"===e&&n.setState({data:l,type:"errorTruck",activeError:!s,active:!1,activeRunning:!1,activeStopped:!1,activeIdle:!1})},n.onSelect=function(e,t){var a=n.state,r=a.data1,c=a.data,l=Object(i.a)(r);c.map((function(e){e.truckNumber===t&&l.push(e)})),n.setState({data1:l})},n.onRemove=function(e,t){var a=n.state,r=a.data1,c=(a.data,Object(i.a)(r));r.map((function(e,a){e.truckNumber===t&&c.splice(a,1)})),n.setState({data1:c})},n.multiselectRef=r.a.createRef(),n.state={runningTrucks:[],stoppedTrucks:[],idleTrucks:[],errorTrucks:[],allTruck:[],data:[],type:"",truckNumberArray:[],data1:[],selectedValue:[],isLoading:!0,active:!0,activeRunning:!1,activeStopped:!1,activeIdle:!1,activeError:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://api.mystral.in/tt/mobile/logistics/searchTrucks?auth-company=PCH&companyId=33&deactivated=false&key=g2qb5jvucg7j8skpu5q7ria0mu&q-expand=true&q-include=lastRunningState,lastWaypoint").then((function(t){var a=t.data.data;e.setState({data:a}),e.setState({truckNumberArray:a.map((function(e){return e.truckNumber}))}),a.map((function(t){if(t.lastRunningState.truckRunningState){var a=[];(a=Object(i.a)(e.state.runningTrucks)).push(t),e.setState({runningTrucks:a})}else if(new Date(t.lastRunningState.stopStartTime).getHours()>4){var n=[];(n=Object(i.a)(e.state.errorTrucks)).push(t),e.setState({errorTrucks:n})}else if(t.lastWaypoint.ignitionOn){var r=[];(r=Object(i.a)(e.state.idleTrucks)).push(t),e.setState({idleTrucks:r})}else{e.setState({stoppedTruckes:t});var c=[];(c=Object(i.a)(e.state.stoppedTrucks)).push(t),e.setState({stoppedTrucks:c})}})),e.setState({isLoading:!1})})).catch((function(e){console.log("error goes here====>>",e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.runningTrucks,n=t.errorTrucks,c=t.activeStopped,l=(t.allTruck,t.activeError),i=t.activeIdle,o=t.activeRunning,s=t.isLoading,u=t.stoppedTrucks,p=t.idleTrucks,m=t.data,d=t.data1,v=t.type,k=t.truckNumberArray,f=t.active;return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(T,null):r.a.createElement("div",{className:"main-component-wrapper"},r.a.createElement("div",{className:"main-component"},r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{onClick:function(){return e.handleAllTruck("allTruck")},className:"".concat(f?"active":"")},r.a.createElement("h4",null,"Total Trucks"),r.a.createElement("p",null,a.length+u.length+p.length+n.length)),r.a.createElement("div",{onClick:function(){return e.handleAllTruck("runningTruck")},className:"".concat(o?"active":"")},r.a.createElement("h4",null,"Running Trucks"),a&&r.a.createElement("p",null,a.length)),r.a.createElement("div",{onClick:function(){return e.handleAllTruck("stoppedTruck")},className:"".concat(c?"active":"")},r.a.createElement("h4",null,"Stopped Trucks"),r.a.createElement("p",null,u.length)),r.a.createElement("div",{onClick:function(){return e.handleAllTruck("idleTruck")},className:"".concat(i?"active":"")},r.a.createElement("h4",null,"Idle Trucks"),r.a.createElement("p",null,p.length)),r.a.createElement("div",{onClick:function(){return e.handleAllTruck("errorTruck")},className:"".concat(l?"active":"")},r.a.createElement("h4",null,"Error Trucks"),r.a.createElement("p",null,n.length)),r.a.createElement("div",{className:"tracker"},r.a.createElement(h.Multiselect,{options:k,onSelect:this.onSelect,onRemove:this.onRemove,displayValue:"name",isObject:!1,ref:this.multiselectRef}))),r.a.createElement("div",null,d.length?r.a.createElement(g,{data:d}):r.a.createElement(g,{data:m,type:v})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.805b2521.chunk.js.map