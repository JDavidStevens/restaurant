import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('Store')
@observer

class EditEntree extends Component {
    
    render() { 
        
        const {editBurgerMenu, editSandwichMenu, editSaladMenu} = this.props.Store
        return ( 
        <div>
            <div>
                    <div>
                    <button onClick={editBurgerMenu}>Burgers</button>                    
                    </div>
                    <div>
                    <button onClick={editSandwichMenu}>Sandwiches</button>                    
                    </div>
                    <div>
                    <button onClick={editSaladMenu}>Salads</button>                    
                    </div>
                </div>
        </div> 
        );
    }
}
 
export default EditEntree;