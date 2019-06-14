import React, { Component } from "react";
import axios from 'axios'


class House extends Component {
    constructor(props) {

        // let {alrmStatus, alrmTime, user} = props.alarm
        super(props)
        this.state = {
            product: []
        }
      }

    


render() {
    let {house} = this.props
    console.log(house.id)
    return (
      <div style = {{width: 'auto', borderRadius: '10px', margin: '10px', border: '1px solid black', backgroundColor: '#DEDEDE', justifyContent: 'center', alignItems: 'center'}}>
          <img style = {{flex: 1, resizeMode: 'contain', width: '200px', height: '150px'}} src={house.img} alt=''/><br/>
          <span>Property Name: </span>{house.name}<br/>
          <span>Address: </span>{house.address}<br/>
          <span>City: </span>{house.city}<br/>
          <span>State: </span>{house.state}<br/>
          <span>Zip: </span>{house.zip}<br/>
          <button onClick = {this.props.deleteHouse}>Remove</button>
      </div>
    );
    }  
}

export default House;