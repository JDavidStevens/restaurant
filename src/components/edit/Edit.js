import React, { Component } from 'react';
// import {Link} from '@reach/router';
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Edit extends Component {
    
    render() { 
        let guest = this.props.id;
        let {order, guestNumber} = this.props.Store;
        let orderArray=[...order]
        let orderObject= orderArray[guest].dessert[0];

        console.log(orderObject)
        // console.log('guest', this.props.id)
        // let orderObject = order.map((element,index)=>{
        //     let drinkOrder = element.drink.map((bev,index)=>{
        //         if(bev.length){
        //         return(
        //         <p key={index}>{bev}</p>
        //         )}else{return null}
        //     })
        //     let entreeOrder = element.entree.map((meal,index)=>{
        //         if(meal.length){
        //         return(
        //         <p key={index}>{meal}</p>
        //         )}else{return null}
        //     })
        //     let sides = element.sideOrder.map((side,index)=>{
        //         if(side.length){
        //         return(
        //         <p key={index}>{side}</p>
        //         )}else{ return null}
        //     })
        //     let dessertOrder = element.dessert.map((dessert,index)=>{
        //         if(dessert.length){
        //         return(
        //         <p key={index}>{dessert}</p>
        //         )}else{return null}
        //     })
        //     return(
        //         <div key={index}>
        //         {order.indexOf(element)+1<=guestNumber?
        //         <h4>Guest {order.indexOf(element)+1}</h4>
        //         :
        //         null
        //     }
        //             {drinkOrder}
        //             {entreeOrder}
        //             {sides}
        //             {dessertOrder}
        //         </div>
        //     )
        // })
        return ( 
            <div>
                Edit
                {/* {orderObject} */}
            </div>
         );
    }
}
 
export default Edit;