import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Dessert extends Component {
    
    render() { 
        const {desserts, handleAddDessert} = this.props.Store;
        
        let dessertSelection = desserts.map((e,index)=>{
            return(
                <div key={index}>
                    <img src={e.image} alt=''/>
                    <div>
                        <h3>{e.item}</h3>
                        <p>{e.description}</p>
                    </div>
                    <button onClick={()=>handleAddDessert(e.item)}>+</button>
                </div>
            )
        })

        return ( 
            <div>               
                {dessertSelection}
            </div>
         );
    }
}
 
export default Dessert;