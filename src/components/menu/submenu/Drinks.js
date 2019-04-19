import React, { Component } from 'react';
import {Link} from '@reach/router';

class Drinks extends Component {
    state = {  }
    render() { 

        // let bevarages = .map((element,id)=>{
        //     return(
        //         <div key = {id}>
        //         <img src={element.logo} alt={element.title} onClick={}/>
        //         </div>
        //     )
        // })

        // let myDrinks = .map((element,id)=>{
        //     return(
        //         <div key={id}>
        //         <img src={element.logo} alt={element.title}/>
        //         <button>remove</button>
        //         </div>
        //     )
        // })
        return ( 
            <div className="beverages">
                <div className="beverage-options-wrapper">
                <h1>Beverages</h1>
                <div>
                   {/* {bevarages}  */}
                </div>
                </div>
                <div className='my-selection-wrapper'>
                    <h1>My Selection(s)</h1>
                    {/* <div>{myDrinks}</div> */}
                </div>
                <Link to={'/appetizers'}>NEXT</Link>
            </div>
         );
    }
}
 
export default Drinks;