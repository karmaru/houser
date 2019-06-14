import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import House from '../House/House'



class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
          houses: []
        };
      }

      componentDidMount() {
        // this.current()
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse = id => {
        axios.delete(`/api/houses/${id}`).then(res => {
            this.setState({
            houses: res.data
            });
        });
        };


render() {
    
    return (  
      <div>  
      <div style = {{backgroundColor: '#AFD4C0', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 300px', width: 'auto'}}>
          Dashboard
          <Link to = '/wizard'>
          <button>
              Add New Property
          </button>
          </Link>

      </div>
      <div>
          Home Listings
      </div>
      <div style = {{width: '75vw', display: 'flex', flexDirection: 'column', height: 'auto', margin: '5px', borderRadius: '10px'}}>
        {this.state.houses.map(house => {
            return (
                <div style={{backgroundColor: '#E5F4EC'}} key={house.id}>
                    <House 
                        house={house}
                        deleteHouse={() => this.deleteHouse(house.id)}
                    />
                </div>
            )
        })}
      </div>

      <div>

      </div>
      </div>
    );
    }  
}

export default Dashboard;
