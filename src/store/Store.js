import {observable, action} from 'mobx';


export class Store {
    @observable number = 1;
    @observable guest = {
        guest: 1,
        drink : [],
        entree: [],
        dessert: []
    }
    @observable toggleBeverages=false
    @observable toggleEntrees=false
    @observable toggleDesserts=false

    @observable order = [];

    @observable beverages = [];
    @observable platters =[];
    @observable salads =[];
    @observable burgers =[];
    @observable sandwiches =[];
    @observable desserts =[];


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
       this.toggleBeverages = !this.toggleBeverages
   } 

   @action entreeMenu = () =>{
       this.toggleEntrees = !this.toggleEntrees
   } 

   @action dessertMenu = () =>{
       this.toggleDesserts = !this.toggleDesserts
   } 

    
}

const store = new Store();
export default store;

