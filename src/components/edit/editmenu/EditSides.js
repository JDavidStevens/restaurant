import React, { Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class EditSides extends Component {
    
    render() { 
        
        let guest = parseInt(this.props.guestNum);
        const {sides,handleEditSide} = this.props.Store;
        let sideSelection= sides.map((e,index)=>{
            return (
                <div key={index}>
                <h2>{e.item}</h2>
                <img src='' alt=''/>
                <button onClick={()=>handleEditSide(guest,e.item)}>+</button>
                </div>
            )
        })
        
        return ( 
            <div className="sides">
                <div className="side-options-wrapper">
            
                <div>
                   {sideSelection} 
                </div>
                </div>
                
            </div>
         );
    }
}
 
export default EditSides;