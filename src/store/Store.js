import {observable, action, computed} from 'mobx';


export class GuestNumber {
    @observable number = 1;

    @action increment = () =>{
        this.number = this.number + 1
    }
    
    @action decrement = () =>{
        this.number = this.number - 1
    }

    
}


