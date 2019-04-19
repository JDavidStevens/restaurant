import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';

class Appetizers extends Component {
    state = {  }
    render() { 
        // let appetizersMenu = .map((element,id)=>{
        //     let {image,title,description} = element;
        //     return(
        //         <div key={id}>
        //             <img src={image} alt=""/>
        //             <h2>{title}</h2>
        //             <p>{description}</p>
        //             <button>+</button>
        //         </div>
        //     )
        // })

        // let myAppetizer = .map((element,id)=>{
        //     let {image,title} = element;
        //     return(
        //         <div key={id}>
        //             <h3>{title}</h3>
        //             <img src={image} alt=''/>
        //         </div>
        //     )
        // })

        return (
            <Fragment>
            <div>
                <h1>Appetizers</h1>
                {/* <div>{appetizersMenu}</div> */}
            </div>
            <div>
                <h1>My Selection(s)</h1>
                {/* <div>{myAppetizer}</div> */}
                <Link to='/beverages'>Previous</Link>
                <Link>Next</Link>
            </div>
            </Fragment>
         );
    }
}
 
export default Appetizers;