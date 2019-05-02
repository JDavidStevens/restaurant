import React, { Component } from 'react';
// import {Link} from '@reach/router';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Edit extends Component {
    
    render() { 
        // let {guest} = this.props.match.params;
        let {order} = this.props.Store;
        // let orderObject = order[guest]
        console.log(order.length)
        return ( 
            <div>
                Edit
            </div>
         );
    }
}
 
export default Edit;