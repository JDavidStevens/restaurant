import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import { Link } from '@reach/router';
// import styled from '@emotion/styled';

@inject("Store")
@observer

class Guests extends Component {
    
    render() { 
        const {number, increment, decrement} = this.props.Store;
        return ( 
            <div>
                <h1>NUMBER OF GUESTS</h1>
                <button onClick={increment}>+</button>
                <input className="guest-input" value={number} onChange={()=>this.state.number} readOnly={true}/>
                <button onClick={decrement}>-</button>
                <div>
                    <Link to="/menu">Next</Link>
                </div>
            </div>
         );
    }
}
 
export default Guests;