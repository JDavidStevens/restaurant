import React, { Component } from 'react';
import { Link } from '@reach/router';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Submitted extends Component {
    
    render() { 
        return ( 
            <div>
                <p>Thank you for your order!</p>
                <button onClick={this.props.Store.reset}><Link to='/'>Return to homepage</Link></button>
            </div>
         );
    }
}
 
export default Submitted;