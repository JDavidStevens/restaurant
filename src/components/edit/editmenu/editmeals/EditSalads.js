import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class EditSalads extends Component {
    
    render() { 

        let guest = parseInt(this.props.guestNum);
        const {salads, handleEditSalad} = this.props.Store;
        
        let saladSelection = salads.map((e,index)=>{
            return(
                <div key={index}>
                    <img src='' alt=''/>
                    <div>
                        <h3>{e.item}</h3>
                        <p>{e.description}</p>
                    </div>
                    <button onClick={()=>handleEditSalad(guest,e.item)}>+</button>
                </div>
            )
        })

        return ( 
            <div>               
                {saladSelection}
            </div>
         );
    }
}
 
export default EditSalads;