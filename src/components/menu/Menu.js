import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
// import {Link} from '@reach/router';
import axios from 'axios';
import NavBar from './submenu/Navbar';

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
        
        const {number, order, bevMenu, entreeMenu, sidesMenu, dessertMenu, toggleBeverages, toggleEntrees, toggleSides, toggleDesserts, handleAddOrder} = this.props.Store;
        
        let guest;
        if(order.length +1 <= number){
            guest = order.length+1
        }else{
            guest = number;
        }
        
        return ( 
            <div>
            <NavBar/>
                <h1>Guest {number}</h1>
                
                


                {/* {guest>=number?<button onClick={handleAddOrder}><Link to='/confirmation'>Proceed to Checkout</Link></button>:<button onClick={handleAddOrder}>Next Guest</button>} */}
            </div>
         );
    }
}
 
export default Menu;