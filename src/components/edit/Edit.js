import React, { Component, Fragment } from 'react';
// import {Link} from '@reach/router';
import {inject, observer} from 'mobx-react';
import EditSideBar from './editsidebar/EditSideBar';
import EditNavBar from './editnavbar/EditNavBar';

@inject("Store")
@observer

class Edit extends Component {
    
    render() { 
        // let guest = parseInt(this.props.id);
        // let {order,handleDeleteDrink, handleDeleteEntree, handleDeleteSide, handleDeleteDessert} = this.props.Store;
        // let orderArray=[...order];
        
        // let drinkArray= orderArray[guest].drink.map((e,index)=>{
        //     return(
        //         <Fragment key={index}>
        //             <p>{e}</p>
        //             <button onClick={()=>{handleDeleteDrink(guest,index)}}>-</button>
        //         </Fragment>
        //     )
        // });
        // let entreeArray= orderArray[guest].entree.map((e,index)=>{
        //     return(
        //         <Fragment key={index}>
        //             <p>{e}</p>
        //             <button onClick={()=>{handleDeleteEntree(guest,e)}}>-</button>
        //         </Fragment>
        //     )
        // });
        // let sidesArray= orderArray[guest].sideOrder.map((e,index)=>{
        //     return(
        //         <Fragment  key={index}>
        //             <p>{e}</p>
        //             <button onClick={()=>{handleDeleteSide(guest,e)}}>-</button>
        //         </Fragment>        
        //     )
        // });
        // let dessertArray= orderArray[guest].dessert.map((e,index)=>{
        //     return(
        //         <Fragment key={index}>
        //         <p>{e}</p>
        //         <button onClick={()=>{handleDeleteDessert(guest,e)}}>-</button>
        //     </Fragment>
        //     )
        // });

        
        return ( 
            <div>
                {/* <h2>Guest {guest+1}</h2>
                {drinkArray}
                {entreeArray}
                {sidesArray}
                {dessertArray} */}
                <EditNavBar/>
                <EditSideBar guestNum={this.props.id}/>
            </div>
         );
    }
}
 
export default Edit;