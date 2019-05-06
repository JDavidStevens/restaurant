import React, { Component } from 'react';
// import {Link} from '@reach/router';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class EditDrinks extends Component {
    
    render() { 
        const {beverages,handleEditDrink} = this.props.Store;
        let guest = parseInt(this.props.guestNum);
        let drinkSelection= beverages.map((e,index)=>{
            return (
                <div key={index} onClick={()=>handleEditDrink(guest,e.item)}>
                <h2>{e.item}</h2>
                <img src='' alt=''/>
                </div>
            )
        })
        
        return ( 
            <div className="beverages">
                <div className="beverage-options-wrapper">
                Drinks
                <div>
                   {drinkSelection} 
                </div>
                </div>
                
            </div>
         );
    }
}
 
export default EditDrinks;