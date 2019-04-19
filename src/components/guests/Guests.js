import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
// import styled from '@emotion/styled';

@inject("GuestNumber")
@observer

class Guests extends Component {
//     state={
//         number: 1
//     }

//    increment = () =>{
//        let {number} = this.state;
//        if(this.state.number<20){
//        this.setState({number: number+1})}
//        else{
//            return;
//        }
//    } 
//    decrement = () =>{
//        let {number} = this.state;
//        if(this.state.number>1){
//        this.setState({number: number-1})}
//        else{
//            return;
//        }
//    } 
    
    render() { 
        console.log(`number = ${this.state.number}`)
        return ( 
            <div>
                <button onClick={this.increment}>+</button>
                <input className="guest-input" type="text" value={this.props.GuestNumber.number} onChange={()=>this.state.number}/>
                <button onClick={this.decrement}>-</button>
            </div>
         );
    }
}
 
export default Guests;