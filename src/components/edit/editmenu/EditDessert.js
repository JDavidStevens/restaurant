import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class EditDessert extends Component {
    
    render() { 
        let guest = parseInt(this.props.guestNum);
        const {desserts, handleEditDessert} = this.props.Store;
        
        let dessertSelection = desserts.map((e,index)=>{
            return(
                <div key={index}>
                    <img src='' alt=''/>
                    <div>
                        <h3>{e.item}</h3>
                        <p>{e.description}</p>
                    </div>
                    <button onClick={()=>handleEditDessert(guest,e.item)}>+</button>
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
 
export default EditDessert;