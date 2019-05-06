import React, { Component, Fragment } from 'react';
// import {Link} from '@reach/router';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class EditSideBar extends Component {
    
    render() { 
        let guest = parseInt(this.props.guestNum);
        let {order,handleDeleteDrink, handleDeleteEntree, handleDeleteSide, handleDeleteDessert} = this.props.Store;
        let orderArray=[...order];
        
        let drinkArray= orderArray[guest].drink.map((e,index)=>{
            return(
                <Fragment key={index}>
                    <p>{e}</p>
                    <button onClick={()=>{handleDeleteDrink(guest,index)}}>-</button>
                </Fragment>
            )
        });
        let entreeArray= orderArray[guest].entree.map((e,index)=>{
            return(
                <Fragment key={index}>
                    <p>{e}</p>
                    <button onClick={()=>{handleDeleteEntree(guest,index)}}>-</button>
                </Fragment>
            )
        });
        let sidesArray= orderArray[guest].sideOrder.map((e,index)=>{
            return(
                <Fragment  key={index}>
                    <p>{e}</p>
                    <button onClick={()=>{handleDeleteSide(guest,index)}}>-</button>
                </Fragment>        
            )
        });
        let dessertArray= orderArray[guest].dessert.map((e,index)=>{
            return(
                <Fragment key={index}>
                <p>{e}</p>
                <button onClick={()=>{handleDeleteDessert(guest,index)}}>-</button>
            </Fragment>
            ) 
        });

        
        return ( 
            <div>
                <h2>Guest {guest+1}</h2>
                {drinkArray}
                {entreeArray}
                {sidesArray}
                {dessertArray}
            </div>
         );
    }
}
 
export default EditSideBar;