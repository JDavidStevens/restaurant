import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('Store')
@observer

class EditEntree extends Component {
    
    render() { 
        const {burgerMenu, sandwichMenu, saladMenu} = this.props.Store
        return ( 
        <div>
            <div>
                    <div>
                    <button onClick={burgerMenu}>Burgers</button>                    
                    </div>
                    <div>
                    <button onClick={sandwichMenu}>Sandwiches</button>                    
                    </div>
                    <div>
                    <button onClick={saladMenu}>Salads</button>                    
                    </div>
                </div>
        </div> 
        );
    }
}
 
export default EditEntree;