import React, { Component } from 'react';
import Burgers from './meals/Burgers';
import Sandwiches from './meals/Sandwiches';
import Platters from './meals/Platters';
import Salads from './meals/Salads';

class Entree extends Component {
    
    render() { 
        const {burgerMenu, sandwichMenu, platterMenu, saladMenu, toggleBurger, toggleSandwich, togglePlatter, toggleSalad} = this.props.Store
        return ( 
        <div>
            <div>
                    <div>
                    <button onClick={burgerMenu}>Burgers</button>
                    {toggleBurger===true?<Burgers/>:null}
                    </div>
                    <div>
                    <button onClick={sandwichMenu}>Sandwiches</button>
                    {toggleSandwich===true?<Sandwiches/>:null}
                    </div>
                    <div>
                    <button onClick={platterMenu}>Platters</button>
                    {togglePlatter===true?<Platters/>:null}
                    </div>
                    <div>
                    <button onClick={saladMenu}>Salads</button>
                    {toggleSalad===true?<Salads/>:null}
                    </div>
                </div>
        </div> );
    }
}
 
export default Entree;