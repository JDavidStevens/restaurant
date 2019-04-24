import {observable, action, computed} from 'mobx';


export class Store {
    @observable number = 1;
    @observable guest = {
        guest: 1,
        drink : [],
        entree: [],
        dessert: []
    }
    @observable beverages=false
    @observable entrees=false
    @observable desserts=false

    @observable order = [];

    @action increment = () =>{
        if(this.number<20){
        this.number = this.number + 1}
        else{
            return;
        }
    }
    
    @action decrement = () =>{
        if(this.number>1){
        this.number = this.number - 1}
        else{
            return;
        }
    }

   @action bevMenu = () =>{
       this.beverages = !this.beverages
   } 

   @action entreeMenu = () =>{
       this.entrees = !this.entrees
   } 

   @action dessertMenu = () =>{
       this.desserts = !this.desserts
   } 

    
}

const store = new Store();
export default store;

