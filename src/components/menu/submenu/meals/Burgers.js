import React, { Component } from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {inject, observer} from 'mobx-react';

@inject("Store")
@observer

class Burgers extends Component {
    
    render() { 
        const {burgers, handleAddBurger} = this.props.Store;
        
        // const burger1 = [];
        // const burger2 = [];
        // const burger3 = [];
        
        
        // for(let i = 0; i> burgers.length; i++){
        //     if(i<=5){
        //         burger1.push(burgers[i])
        //     }else if(i>5 && i<= 11){
        //         burger2.push(burgers[i])
        //     }else{
        //         burger3.push(burgers[i])
        //     }
        // }
        

        let burgerSelection = burgers.map((e,index)=>{
            return(
                <div key={index}>
                    <img src='' alt=''/>
                    <div>
                        <h3>{e.item}</h3>
                        <p>{e.description}</p>
                    </div>
                    <button onClick={()=>handleAddBurger(e.item)}>+</button>
                </div>
            )
        })

        // const burger1= [];
        // const burger2= [];
        // const burger3= [];

        // for(let i = 0; i> burgerSelection.length; i++){
        //     if(burgerSelection.indexOf(burgerSelection[i])<=5){
        //         burger1.push(burgerSelection[i])
        //     }else if(i>5 && i<= 11){
        //         burger2.push(burgerSelection[i])
        //     }else{
        //         burger3.push(burgerSelection[i])
        //     }
        // }
        // console.log('burger1',burger1)
        return ( 
            <div>
                <h1>Burgers</h1>
                {/* <Carousel
                showThumbs={false}
                infiniteLoop={true}
                showStatus={true}
                showIndicators={true}
                >
                
                </Carousel> */}
                {burgerSelection}
                </div>
         );
    }
}
 
export default Burgers;