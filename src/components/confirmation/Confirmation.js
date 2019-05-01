import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Confirmation extends Component {

    render() { 
        const {guest} = this.props.Store;
        console.log('confirm',guest)
        // let orderConfirm = order.map(element=>{

        // })
    
        return ( 
        <div>
           Confirmation 
        </div> );
    }
}
 
export default Confirmation;