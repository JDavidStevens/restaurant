import {observable, action} from 'mobx';


export class Store {
    @observable number = 1;
    
    // Current guest order
    @observable guest = {
        guest: 1,
        drink : [],
        entree: [],
        dessert: []
    }
    
    // Guests order storage
    @observable order = [];

    // Main menu toggle state
    @observable toggleBeverages=false
    @observable toggleEntrees=false
    @observable toggleDesserts=false

    // Entree menu toggle state
    @observable toggleBurger=false
    @observable toggleSandwich=false
    @observable togglePlatter=false
    @observable toggleSalad=false


    // Info from DB separated by type
    @observable beverages = [];
    @observable platters =[];
    @observable salads =[];
    @observable burgers =[];
    @observable sandwiches =[];
    @observable desserts =[];

    //Guest Counter- Guest Page
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

    // Main menu toggle actions
   @action bevMenu = () =>{
       this.toggleBeverages = !this.toggleBeverages
   } 
    @action entreeMenu = () =>{
       this.toggleEntrees = !this.toggleEntrees
   } 
   @action dessertMenu = () =>{
       this.toggleDesserts = !this.toggleDesserts
   } 

   //Entree menu toggle actions
   @action burgerMenu = () =>{
       this.toggleBurger = !this.toggleBurger
   } 
   @action sandwichMenu = () =>{
       this.toggleSandwich = !this.toggleSandwich
   } 
   @action platterMenu = () =>{
       this.togglePlatter = !this.togglePlatter
   } 
   @action saladMenu = () =>{
       this.toggleSalad = !this.toggleSalad
   } 

   //Item selection action
   @action handleAddDrink = (drink) =>{
       this.guest.drink.push(drink)
   }
   @action handleAddBurger = (burger) =>{
       this.guest.entree.push(burger)
   }
    
}

const store = new Store();
export default store;

