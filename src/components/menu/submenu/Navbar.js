import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

import Drinks from './Drinks';
import Entree from './Entree';
import Dessert from './Dessert';
import Sides from './Sides';

@inject("Store")
@observer

class NavBar extends Component {
    
    render() { 
        const {bevMenu, entreeMenu, sidesMenu, dessertMenu, toggleBeverages, toggleEntrees, toggleSides, toggleDesserts} = this.props.Store;
        return ( 
            <div>
                    <div>
                    <button onClick={bevMenu}>Drinks</button>
                    {toggleBeverages===true?<Drinks/>:null}
                    </div>
                    <div>
                    <button onClick={entreeMenu}>Entrees</button>
                    {toggleEntrees===true?<Entree/>:null}
                    </div>
                    <div>
                    <button onClick={sidesMenu}>Sides</button>
                    {toggleSides===true?<Sides/>:null}
                    </div>
                    <div>
                    <button onClick={dessertMenu}>Desserts</button>
                    {toggleDesserts===true?<Dessert/>:null}
                    </div>
                </div>
         );
    }
}
 
export default NavBar;