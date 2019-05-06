import React, { Component } from 'react';
// import {Link} from '@reach/router';
import {inject, observer} from 'mobx-react';
import EditSideBar from './editsidebar/EditSideBar';
import EditNavBar from './editnavbar/EditNavBar';
import EditDrinks from './editmenu/EditDrinks';
import EditBurgers from './editmenu/editmeals/EditBurgers';
import EditSandwiches from './editmenu/editmeals/EditSandwiches';
import EditSalads from './editmenu/editmeals/EditSalads';
import EditSides from './editmenu/EditSides';
import EditDessert from './editmenu/EditDessert';

@inject("Store")
@observer

class Edit extends Component {
    
    render() { 
        const {toggleEditBeverages, toggleEditBurger, toggleEditDesserts, toggleEditEntrees, toggleEditSalad, toggleEditSandwich, toggleEditSides} = this.props.Store;
        return ( 
            <div>
            <EditNavBar/>
            <div>
                    <div>
                    
                    {toggleEditBeverages===true?<EditDrinks guestNum={this.props.id}/>:null}
                    </div>
                    <div>
                    {toggleEditEntrees===true && toggleEditBurger===true?<EditBurgers guestNum={this.props.id}/>:null}
                    </div>
                    <div>
                    {toggleEditEntrees===true && toggleEditSandwich===true?<EditSandwiches guestNum={this.props.id}/>:null}
                    </div>
                    <div>
                    {toggleEditEntrees===true && toggleEditSalad===true?<EditSalads guestNum={this.props.id}/>:null}
                    </div>
                    <div>
                    
                    {toggleEditSides===true?<EditSides guestNum={this.props.id}/>:null}
                    </div>
                    <div>
                    {toggleEditDesserts===true?<EditDessert guestNum={this.props.id}/>:null}
                    </div>
                    <EditSideBar guestNum={this.props.id}/>
                </div>     
            </div>
         );
    }
}
 
export default Edit;