import React, { Component } from 'react';
// import {Link} from '@reach/router';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Drinks extends Component {
    
    render() { 
        const {beverages} = this.props.Store;
        let drinkSelection= beverages.map((e,index)=>{
            return (
                <h2 key={index}>{e.item}</h2>
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
 
export default Drinks;