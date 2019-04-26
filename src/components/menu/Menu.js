import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
// import {Link} from '@reach/router';
import axios from 'axios';

import Drinks from './submenu/Drinks';
import Entree from './submenu/Entree';
import Dessert from './submenu/Dessert';

@inject("Store")
@observer

class Menu extends Component {
    state={
        menu: this.props.Store.menu
    }
    componentDidMount(){
        const {beverages, platters, salads,burgers, sandwiches, desserts} = this.props.Store; 
        axios.get("/api/menu").then(res=>{
            
            const menu = res.data;
            menu.map(e=>{
                if(e.type==="drink"){
                     beverages.push(e)
                }else if(e.type==="platter"){
                    platters.push(e)
                }else if(e.type==="salad"){
                    salads.push(e)
                }else if(e.type==="burger"){
                    burgers.push(e)
                }else if(e.type==="sandwich"){
                    sandwiches.push(e)
                }else if(e.type==="dessert"){
                    desserts.push(e)
                }
                return null
            })
        })
    }
    
    render() { 
        const {number, order, bevMenu, entreeMenu, dessertMenu, toggleBeverages, toggleEntrees, toggleDesserts,menu} = this.props.Store;
        let guest = order.length +1 
        
        return ( 
            <div>
                <h1>Guest {guest}</h1>
                <h1>{menu}</h1>
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
                    <button onClick={dessertMenu}>Desserts</button>
                    {toggleDesserts===true?<Dessert/>:null}
                    </div>
                </div>


                {guest===number?<button>Proceed to Checkout</button>:<button>Next Guest</button>}
            </div>
         );
    }
}
 
export default Menu;