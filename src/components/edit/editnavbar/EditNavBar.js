import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import EditEntree from '../editmenu/EditEntree';

@inject("Store")
@observer

class EditNavBar extends Component {
    
    render() { 
        const {editBevMenu, editEntreeMenu, editSidesMenu, editDessertMenu, toggleEditEntrees} = this.props.Store;
        return ( 
            <div>
                    <div>
                    <button onClick={editBevMenu}>Drinks</button>
                    </div>
                    <div>
                    <button onClick={editEntreeMenu}>Entrees</button>
                    </div>
                    <div>
                    <button onClick={editSidesMenu}>Sides</button>
                    </div>
                    <div>
                    <button onClick={editDessertMenu}>Desserts</button>
                    </div>
                    {toggleEditEntrees===true?<EditEntree/>:null}
                </div>
         );
    }
}
 
export default EditNavBar;