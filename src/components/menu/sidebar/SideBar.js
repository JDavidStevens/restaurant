import React, { Component, Fragment } from 'react';
import {Link} from '@reach/router';
import { inject, observer } from 'mobx-react';
import Swal from 'sweetalert2';

@inject('Store')
@observer

class SideBar extends Component {
    constructor(){
        super()
        this.state={}
    }

    handleEmptyOrder= ()=>{
        Swal.fire(`Please select an item for guest ${this.props.Store.guestNumber}`)
    }

    render() { 
        const {guestNumber, guest, handleRemoveDrink, handleRemoveEntree, handleRemoveSide, handleRemoveDessert, handleAddOrder, order} = this.props.Store;
        
        let bevs = guest.drink.map((e,index)=>{
        return(
            <Fragment key={index}>
                <p>{e}</p>
                <button onClick={()=>{handleRemoveDrink(e)}}>-</button>
            </Fragment>
        )})
        
        let entrees = guest.entree.map((e,index)=>{
        return(
            <Fragment key={index}>
                <p>{e}</p>
                <button onClick={()=>{handleRemoveEntree(e)}}>-</button>
            </Fragment>
        )})

        let sides = guest.sideOrder.map((e,index)=>{
        return(
            <Fragment  key={index}>
                <p>{e}</p>
                <button onClick={()=>{handleRemoveSide(e)}}>-</button>
            </Fragment>        
        )})

        let desserts = guest.dessert.map((e,index)=>{
        return(
            <Fragment key={index}>
                <p>{e}</p>
                <button onClick={()=>{handleRemoveDessert(e)}}>-</button>
            </Fragment>
        )})
        
        return ( 
            <div>
                <div>
                    <h3>Guest {guestNumber}</h3>
                    {bevs.length? (<h4>Drink(s):{bevs}</h4>):(<h4>Drink(s):none</h4>)}
                    {entrees.length? (<h4>Entree(s):{entrees}</h4>):(<h4>Entree(s):none</h4>)}
                    {sides.length?(<h4>Side(s):{sides}</h4>):(<h4>Side(s):none</h4>)}
                    {desserts.length?(<h4>Dessert(s):{desserts}</h4>):(<h4>Dessert(s):none</h4>)}
                </div>
                    {bevs.length || entrees.length || sides.length || desserts.length?
                    <button onClick={handleAddOrder}>Next Guest</button>
                    :
                    <button onClick={this.handleEmptyOrder}>Next Guest</button>
                    }
                    {order.length || bevs.length || entrees.length || sides.length || desserts.length?
                    <button onClick={handleAddOrder}><Link to='/confirmation'>Proceed to Checkout</Link></button>
                    :
                    <button onClick={this.handleEmptyOrder}>Proceed to Checkout</button>
                    }
            </div>
         );
    }
}
 
export default SideBar;