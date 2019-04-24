import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import {Link} from '@reach/router';
import Drinks from './submenu/Drinks';
import Entree from './submenu/Entree';
import Dessert from './submenu/Dessert';

@inject("Store")
@observer

class Menu extends Component {
    
    render() { 
        const {number, order, bevMenu, entreeMenu, dessertMenu, beverages, entrees, desserts} = this.props.Store;
        let guest = order.length +1 
        return ( 
            <div>
                <h1>Guest {guest}</h1>
                <div>
                    <div>
                    <button onClick={bevMenu}>Drinks</button>
                    {beverages===true?<Drinks/>:null}
                    </div>
                    <div>
                    <button onClick={entreeMenu}>Entrees</button>
                    {entrees===true?<Entree/>:null}
                    </div>
                    <div>
                    <button onClick={dessertMenu}>Desserts</button>
                    {desserts===true?<Dessert/>:null}
                    </div>
                </div>


                {guest===number?<button>Proceed to Checkout</button>:<button>Next Guest</button>}
            </div>
         );
    }
}
 
export default Menu;