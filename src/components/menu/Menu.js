import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
// import {Link} from '@reach/router';
import axios from 'axios';
import NavBar from './navbar/Navbar';

import Drinks from './submenu/Drinks';
import Entree from './submenu/Entree';
import Sides from './submenu/Sides';
import Dessert from './submenu/Dessert';

import Burgers from './submenu/meals/Burgers';
import Sandwiches from './submenu/meals/Sandwiches';
import Salads from './submenu/meals/Salads';

@inject("Store")
@observer

class Menu extends Component {
    
    componentDidMount(){
        const {beverages, salads, burgers, sandwiches, sides, desserts} = this.props.Store; 
        axios.get("/api/menu").then(res=>{
            
            const menu = res.data;
            menu.map(e=>{
                if(e.type==="drink"){
                     beverages.push(e)
                }else if(e.type==="salad"){
                    salads.push(e)
                }else if(e.type==="burger"){
                    burgers.push(e)
                }else if(e.type==="sandwich"){
                    sandwiches.push(e)
                }else if(e.type==="side"){
                    sides.push(e)
                }else if(e.type==="dessert"){
                    desserts.push(e)
                }
                return null
            })
        })
    }
    
    render() { 
        
        const {toggleBeverages, toggleEntrees, toggleSides, toggleDesserts, toggleBurger, toggleSandwich, toggleSalad} = this.props.Store;
        
        return ( 
            <div>
            <NavBar/>
            <div>
                    <div>
                    
                    {toggleBeverages===true?<Drinks/>:null}
                    </div>
                    <div>
                    {toggleEntrees===true && toggleBurger===true?<Burgers/>:null}
                    </div>
                    <div>
                    {toggleEntrees===true && toggleSandwich===true?<Sandwiches/>:null}
                    </div>
                    <div>
                    {toggleEntrees===true && toggleSalad===true?<Salads/>:null}
                    </div>
                    <div>
                    
                    {toggleSides===true?<Sides/>:null}
                    </div>
                    <div>
                    {toggleDesserts===true?<Dessert/>:null}
                    </div>
                </div>
                
                
                


                {/* {guest>=number?<button onClick={handleAddOrder}><Link to='/confirmation'>Proceed to Checkout</Link></button>:<button onClick={handleAddOrder}>Next Guest</button>} */}
            </div>
         );
    }
}
 
export default Menu;