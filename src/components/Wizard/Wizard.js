import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'


class Wizard extends Component {
    constructor(props) {

        // let {alrmStatus, alrmTime, user} = props.alarm
        super(props)

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            houses: []
        }
        this.subIt = this.subIt.bind(this)
      }

    subIt() {
    axios
        .post("/api/houses", {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        mortgage: 0,
        rent: 0
        })
        .then(res => {
        this.setState({
            allMessages: res.data
        });
        });
    }      

render() {
    console.log(this.state)
    return (
     <div>   
      <div style = {{display: 'flex', backgroundColor: '#AFD4C0', justifyContent: 'space-between', padding: '10px 300px'}}>
          Add New Listing
          <Link to='/'>
          <button style = {{backgroundColor: '#FEC2C2', display: 'flex', padding: '2px'}}>Cancel</button>
          </Link>
      </div>
      <form>
                <p>Property Name</p>
                <input 
                    type="text" 
                    onChange={e=>this.setState({name:e.target.value})} 
                    value={this.state.name}
                    placeholder='name'/>
                <p>Address</p>
                <input 
                    type="text" 
                    onChange={e=>this.setState({address:e.target.value})} 
                    value={this.state.address}
                    placeholder='address'/>
                <p>City</p>    
                <input 
                    type="text" 
                    onChange={e=>this.setState({city:e.target.value})} 
                    value={this.state.city}
                    placeholder='city'/>
                <p>State</p>    
                <input 
                    type="text" 
                    onChange={e=>this.setState({state:e.target.value})} 
                    value={this.state.state}
                    placeholder='state'/>
                <p>Zip</p>    
                <input 
                    type="text" 
                    onChange={e=>this.setState({zip:e.target.value})} 
                    value={this.state.zip}
                    placeholder='zip'/>            
      </form>
      <button onClick = {this.subIt} >Complete</button>
     </div> 
    );
    }  
}

export default Wizard;