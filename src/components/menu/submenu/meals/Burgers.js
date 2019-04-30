import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Burgers extends Component {

    
    render() { 
        
        const {burgers, handleAddBurger} = this.props.Store;
        
        let burgerSelection = burgers.map((e,index)=>{
            return(
                <div key={index}>
                    <img src='' alt=''/>
                    <div>
                        <h3>{e.item}</h3>
                        <p>{e.description}</p>
                    </div>
                    <button onClick={()=>handleAddBurger(e.item)}>+</button>
                </div>
            )
        })

        return ( 
            <div>               
                {burgerSelection}
            </div>
         );
    }
}
 
export default Burgers;