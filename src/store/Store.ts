import {observable, action} from 'mobx';


// store interface 
export interface TypeStore{
    guestNumber : number;

    guest : {
        // drink : string[],
        entree : string[],
        sideOrder : string[],
        dessert : string[]        
    };


    order: object[];
    toggleBeverages : boolean;
    toggleEntrees : boolean;
    toggleSides : boolean;
    toggleDesserts : boolean;
    
    toggleBurger : boolean;
    toggleSandwich : boolean;
    toggleSalad : boolean;

    beverages : string[]; 
    salads : string[];
    burgers : string[];
    sandwiches : string[];
    sides : string[];
    desserts : string[];

    // bevMenu();
    // entreeMenu();
    // sidesMenu();
    // dessertMenu();

    // burgerMenu();
    // sandwichMenu();
    // saladMenu();

    handleAddDrink(bev:string):void;
    handleAddBurger(burger:string):void;
    handleAddSandwich(sandwich:string):void;
    handleAddSalad(salad:string):void;
    handleAddSide(side: string):void;
    handleAddDessert(treat:string):void;


}

// export class Store implements TypeStore{
    export class Store{
    
    @observable public guestNumber = 1;
    
    // Current guest order
    @observable public guest = {
        drink : [],
        entree: [],
        sideOrder: [],
        dessert: []
    }
    
    // Guests orders storage
    @observable public order = [];

    // Main menu nav toggle state
    @observable public toggleBeverages=false
    @observable public toggleEntrees=false
    @observable public toggleSides=false
    @observable public toggleDesserts=false

    // Entree menu nav toggle state
    @observable public toggleBurger=false
    @observable public toggleSandwich=false
    @observable public toggleSalad=false


    // Info from DB separated by type
    @observable public beverages = [];
    @observable public salads =[];
    @observable public burgers =[];
    @observable public sandwiches =[];
    @observable public sides = [];
    @observable public desserts =[];

  
    // Main menu nav toggle actions
   @action public bevMenu = () =>{
       this.toggleBeverages = !this.toggleBeverages;
       this.toggleEntrees = false;
       this.toggleSides = false;
       this.toggleDesserts = false;
   } 
    @action public entreeMenu = () =>{
       this.toggleEntrees = !this.toggleEntrees;
       this.toggleBeverages = false;
       this.toggleSides = false;
       this.toggleDesserts = false;
   } 
    @action public sidesMenu = () =>{
       this.toggleSides = !this.toggleSides
       this.toggleBeverages = false;
       this.toggleEntrees = false;
       this.toggleDesserts = false;
   } 
   @action public dessertMenu = () =>{
       this.toggleDesserts = !this.toggleDesserts;
       this.toggleBeverages = false;
       this.toggleEntrees = false;
       this.toggleSides = false;
   } 

   // Entree menu nav toggle actions
   @action public burgerMenu = () =>{
       this.toggleBurger = !this.toggleBurger;
       this.toggleSandwich = false;
       this.toggleSalad= false;
   } 
   @action public sandwichMenu = () =>{
       this.toggleSandwich = !this.toggleSandwich;
       this.toggleBurger = false;
       this.toggleSalad = false;
   }  
   @action public saladMenu = () =>{
       this.toggleSalad = !this.toggleSalad;
       this.toggleBurger = false;
       this.toggleSandwich = false;
   } 

   // Item selection action

   @action.bound public handleAddDrink(bev:string):void{
       this.guest.drink.push(bev)
   }
   @action public handleAddBurger(burger:string):void{
       this.guest.entree.push(burger)
   }
   @action public handleAddSandwich(sandwich:string):void{
       this.guest.entree.push(sandwich)
   }
   @action public handleAddSalad(salad:string):void{
       this.guest.entree.push(salad)
   }
   @action public handleAddSide(side: string):void{
       this.guest.sideOrder.push(side)
   }
   @action public handleAddDessert(treat:string):void{
       this.guest.dessert.push(treat)
   }

   @action public handleAddOrder = () =>{
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
   @action public handleRemoveDrink = (drink) => {
        this.guest.drink.splice(this.guest.drink.indexOf(drink),1)
   }
   @action public handleRemoveEntree = (meal) => {
        this.guest.entree.splice(this.guest.entree.indexOf(meal),1)
   }
   @action public handleRemoveSide = (side) => {
        this.guest.sideOrder.splice(this.guest.sideOrder.indexOf(side),1)
   }
   @action public handleRemoveDessert = (treat) => {
        this.guest.dessert.splice(this.guest.dessert.indexOf(treat),1)
   }

//////////////////// EDIT PAGE ////////////////////////

// Edit page nav toggle   
    @observable public toggleEditBeverages=false
    @observable public toggleEditEntrees=false
    @observable public toggleEditSides=false
    @observable public toggleEditDesserts=false

// Edit Entree Menu nav toggle state
    @observable public toggleEditBurger=false
    @observable public toggleEditSandwich=false
    @observable public toggleEditSalad=false

// Edit page delete item
    @action public handleDeleteDrink = (index,bev) => {
        this.order[index].drink.splice(bev,1)
    }
    @action public handleDeleteEntree = (index,meal) => {
        this.order[index].entree.splice(meal,1)
    }
    @action public handleDeleteSide = (index,side) => {
        this.order[index].sideOrder.splice(side,1)
    }
    @action public handleDeleteDessert = (index,treat) => {
        this.order[index].dessert.splice(treat,1)
    }
    

// Main Edit nav toggle actions
@action public editBevMenu = () =>{
    this.toggleEditBeverages = !this.toggleEditBeverages;
    this.toggleEditEntrees = false;
    this.toggleEditSides = false;
    this.toggleEditDesserts = false;
} 
 @action public editEntreeMenu = () =>{
    this.toggleEditEntrees = !this.toggleEditEntrees;
    this.toggleEditBeverages = false;
    this.toggleEditSides = false;
    this.toggleEditDesserts = false;
} 
 @action public editSidesMenu = () =>{
    this.toggleEditSides = !this.toggleEditSides
    this.toggleEditBeverages = false;
    this.toggleEditEntrees = false;
    this.toggleEditDesserts = false;
} 
@action public editDessertMenu = () =>{
    this.toggleEditDesserts = !this.toggleEditDesserts;
    this.toggleEditBeverages = false;
    this.toggleEditEntrees = false;
    this.toggleEditSides = false;
} 

// Edit Entree menu nav toggle actions
@action public editBurgerMenu = () =>{
    this.toggleEditBurger = !this.toggleEditBurger;
    this.toggleEditSandwich = false;
    this.toggleEditSalad= false;
} 
@action public editSandwichMenu = () =>{
    this.toggleEditSandwich = !this.toggleEditSandwich;
    this.toggleEditBurger = false;
    this.toggleEditSalad = false;
}  
@action public editSaladMenu = () =>{
    this.toggleEditSalad = !this.toggleEditSalad;
    this.toggleEditBurger = false;
    this.toggleEditSandwich = false;
} 


// Add new items from edit page
@action public handleEditDrink = (index,bev) =>{
    this.order[index].drink.push(bev)
}
@action public handleEditBurger = (index,burger) =>{
    this.order[index].entree.push(burger)
}
@action public handleEditSandwich = (index, sandwich) =>{
    this.order[index].entree.push(sandwich)
}
@action public handleEditSalad = (index,salad) =>{
    this.order[index].entree.push(salad)
}
@action public handleEditSide = (index,side) =>{
    this.order[index].sideOrder.push(side)
}
@action public handleEditDessert = (index,treat) =>{
    this.order[index].dessert.push(treat)
}

// reset page upon submitting full order
@action public reset = () =>{
    this.order = [];
    this.guestNumber=1;
}
}
const store = new Store();
export default store;

