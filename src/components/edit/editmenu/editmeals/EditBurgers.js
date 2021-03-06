import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class EditBurgers extends Component {

    
    render() { 
        
        let guest = parseInt(this.props.guestNum);
        const {burgers, handleEditBurger} = this.props.Store;
        
        let burgerSelection = burgers.map((e,index)=>{
            return(
                <div key={index}>
                    <img src='' alt=''/>
                    <div>
                        <h3>{e.item}</h3>
                        <p>{e.description}</p>
                    </div>
                    <button onClick={()=>handleEditBurger(guest, e.item)}>+</button>
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
 
export default EditBurgers;