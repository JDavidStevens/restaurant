import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class EditSandwiches extends Component {
    
    render() { 
        let guest = parseInt(this.props.guestNum);
        const {sandwiches, handleEditSandwich} = this.props.Store;
        
        let sandwichSelection = sandwiches.map((e,index)=>{
            return(
                <div key={index}>
                    <img src='' alt=''/>
                    <div>
                        <h3>{e.item}</h3>
                        <p>{e.description}</p>
                    </div>
                    <button onClick={()=>handleEditSandwich(guest,e.item)}>+</button>
                </div>
            )
        })

        return ( 
            <div>               
                {sandwichSelection}
            </div>
         );
    }
}
 
export default EditSandwiches;