import {observable, action} from 'mobx';

export class Store {
    @observable guestNumber = 1;
    
    // Current guest order
    @observable guest = {
        drink : [],
        entree: [],
        sideOrder: [],
        dessert: []
    }
    
    // Guests order storage
    @observable order = [];

    // Main menu toggle state
    @observable toggleBeverages=false
    @observable toggleEntrees=false
    @observable toggleSides=false
    @observable toggleDesserts=false

    // Entree menu toggle state
    @observable toggleBurger=false
    @observable toggleSandwich=false
    @observable toggleSalad=false


    // Info from DB separated by type
    @observable beverages = [];
    @observable salads =[];
    @observable burgers =[];
    @observable sandwiches =[];
    @observable sides = [];
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
       this.toggleBeverages = !this.toggleBeverages;
       this.toggleEntrees = false;
       this.toggleSides = false;
       this.toggleDesserts = false;
   } 
    @action entreeMenu = () =>{
       this.toggleEntrees = !this.toggleEntrees;
       this.toggleBeverages = false;
       this.toggleSides = false;
       this.toggleDesserts = false;
   } 
    @action sidesMenu = () =>{
       this.toggleSides = !this.toggleSides
       this.toggleBeverages = false;
       this.toggleEntrees = false;
       this.toggleDesserts = false;
   } 
   @action dessertMenu = () =>{
       this.toggleDesserts = !this.toggleDesserts;
       this.toggleBeverages = false;
       this.toggleEntrees = false;
       this.toggleSides = false;
   } 

   //Entree menu toggle actions
   @action burgerMenu = () =>{
       this.toggleBurger = !this.toggleBurger;
       this.toggleSandwich = false;
       this.toggleSalad= false;
   } 
   @action sandwichMenu = () =>{
       this.toggleSandwich = !this.toggleSandwich;
       this.toggleBurger = false;
       this.toggleSalad = false;
   }  
   @action saladMenu = () =>{
       this.toggleSalad = !this.toggleSalad;
       this.toggleBurger = false;
       this.toggleSandwich = false;
   } 

   //Item selection action
   @action handleAddDrink = (drink) =>{
       this.guest.drink.push(drink)
   }
   @action handleAddBurger = (burger) =>{
       this.guest.entree.push(burger)
   }
   @action handleAddSandwich = (sandwich) =>{
       this.guest.entree.push(sandwich)
   }
   @action handleAddSalad = (salad) =>{
       this.guest.entree.push(salad)
   }
   @action handleAddSide = (side) =>{
       this.guest.sideOrder.push(side)
   }
   @action handleAddDessert = (treat) =>{
       this.guest.dessert.push(treat)
   }

   @action handleAddOrder = () =>{
       this.order.push(this.guest);
       this.guestNumber = this.guestNumber + 1;
       this.guest={
            drink: [],
            entree: [],
            sideOrder: [],
            dessert: []
                }
   }
// Sidebar remove item
   @action handleRemoveDrink = (drink) => {
        this.guest.drink.splice(this.guest.drink.indexOf(drink),1)
   }
   @action handleRemoveEntree = (meal) => {
        this.guest.entree.splice(this.guest.entree.indexOf(meal),1)
   }
   @action handleRemoveSide = (side) => {
        this.guest.sideOrder.splice(this.guest.sideOrder.indexOf(side),1)
   }
   @action handleRemoveDessert = (treat) => {
        this.guest.dessert.splice(this.guest.dessert.indexOf(treat),1)
   }

// Edit page delete item
@action handleDeleteDrink = (index,bev) => {
    this.order[index].drink.splice(bev,1)
}
@action handleDeleteEntree = (index,meal) => {
    this.order[index].entree.splice(meal,1)
}
@action handleDeleteSide = (index,side) => {
    this.order[index].sideOrder.splice(side,1)
}
@action handleDeleteDessert = (index,treat) => {
    this.order[index].dessert.splice(treat,1)
}
    
}

const store = new Store();
export default store;

