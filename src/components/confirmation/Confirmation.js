import React, { Component } from 'react';
import {Link} from '@reach/router';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Confirmation extends Component {

    render() { 
        const {order,guestNumber} = this.props.Store;
        let orderConfirm = order.map((element,index)=>{
            let drinkOrder = element.drink.map((bev,index)=>{
                if(bev.length){
                return(
                <p key={index}>{bev}</p>
                )}else{return null}
            })
            let entreeOrder = element.entree.map((meal,index)=>{
                if(meal.length){
                return(
                <p key={index}>{meal}</p>
                )}else{return null}
            })
            let sides = element.sideOrder.map((side,index)=>{
                if(side.length){
                return(
                <p key={index}>{side}</p>
                )}else{ return null}
            })
            let dessertOrder = element.dessert.map((dessert,index)=>{
                if(dessert.length){
                return(
                <p key={index}>{dessert}</p>
                )}else{return null}
            })
            return(
                <div key={index}>
                {order.indexOf(element)+1<=guestNumber?
                <h4>Guest {order.indexOf(element)+1}</h4>
                :
                null
            }
                    {drinkOrder}
                    {entreeOrder}
                    {sides}
                    {dessertOrder}
                    <Link to={`/confirmation/edit/${order.indexOf(element)}`}>Edit</Link>
                </div>
            )
        })
        
        return ( 
        <div>
            <div>
           {orderConfirm}
            </div>
            <Link to='/submitted'>Submit</Link>
        </div> 
        );
    }
}
 
export default Confirmation;