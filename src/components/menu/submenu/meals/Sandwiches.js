import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Sandwiches extends Component {
    
    render() { 
        const {sandwiches, handleAddSandwich} = this.props.Store;
        
        let sandwichSelection = sandwiches.map((e,index)=>{
            return(
                <div key={index}>
                    <img src={e.image} alt=''/>
                    <div>
                        <h3>{e.item}</h3>
                        <p>{e.description}</p>
                    </div>
                    <button onClick={()=>handleAddSandwich(e.item)}>+</button>
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
 
export default Sandwiches;