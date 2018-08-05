import axios from 'axios';

export default class RestResource {
    constructor(){
        this.link = 'localhost:4000/tasks';
    }
    
    
    
    sendData(data){
        axios.post(`${this.link}`, data);
        console.log(data);
    }
}
