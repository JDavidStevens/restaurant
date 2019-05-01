import React, { Component, Fragment } from 'react';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Confirmation extends Component {

    render() { 
        const {guest,order} = this.props.Store;
        console.log('confirm',guest)
        let orderConfirm = order.map((element,index)=>{
            let drinkOrder = element.drink.map((bev,index)=>{
                return(
                <p key={index}>{bev}</p>
                )
            })
            let entreeOrder = element.entree.map((meal,index)=>{
                return(
                <p key={index}>{meal}</p>
                )
            })
            let sides = element.sideOrder.map((side,index)=>{
                return(
                <p key={index}>{side}</p>
                )
            })
            let dessertOrder = element.dessert.map((dessert,index)=>{
                return(
                <p key={index}>{dessert}</p>
                )
            })
            return(
                <Fragment key={index}>
                <h4>Guest {order.indexOf(element)+1}</h4>
                <ul>
                    <li>{drinkOrder}</li>
                    <li>{entreeOrder}</li>
                    <li>{sides}</li>
                    <li>{dessertOrder}</li>
                </ul>
                </Fragment>
            )

        })
    
        return ( 
        <div>
           {orderConfirm}
        </div> );
    }
}
 
export default Confirmation;