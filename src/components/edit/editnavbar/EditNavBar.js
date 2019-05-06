import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import EditEntree from '../editmenu/EditEntree';

@inject("Store")
@observer

class EditNavBar extends Component {
    
    render() { 
        const {bevMenu, entreeMenu, sidesMenu, dessertMenu, toggleEntrees} = this.props.Store;
        return ( 
            <div>
                    <div>
                    <button onClick={bevMenu}>Drinks</button>
                    </div>
                    <div>
                    <button onClick={entreeMenu}>Entrees</button>
                    </div>
                    <div>
                    <button onClick={sidesMenu}>Sides</button>
                    </div>
                    <div>
                    <button onClick={dessertMenu}>Desserts</button>
                    </div>
                    {toggleEntrees===true?<EditEntree/>:null}
                </div>
         );
    }
}
 
export default EditNavBar;