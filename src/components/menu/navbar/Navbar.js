import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import Entree from '../submenu/Entree';

@inject("Store")
@observer

class NavBar extends Component {
    
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
                    {toggleEntrees===true?<Entree/>:null}
                </div>
         );
    }
}
 
export default NavBar;