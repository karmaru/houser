import React, { Component } from "react";


class Header extends Component {
    constructor(props) {

        // let {alrmStatus, alrmTime, user} = props.alarm
        super(props)
      }


render() {
    return (
      <div style = {{width: '100vw', height: '8vh', backgroundColor: '#519872', color: 'white', fontSize: '25px', alignItems: 'center'}}>
          Houser
      </div>
    );
    }  
}

export default Header;