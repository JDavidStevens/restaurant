import React, { Component} from 'react';

class Sides extends Component {
    
    render() { 
        
        const {sides,handleAddSide} = this.props.Store;
        let sideSelection= sides.map((e,index)=>{
            return (
                <div key={index} onClick={()=>handleAddSide(e.item)}>
                <h2>{e.item}</h2>
                <img src='' alt=''/>
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
 
export default Sides;