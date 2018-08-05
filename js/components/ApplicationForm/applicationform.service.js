import axios from 'axios';

export default class RestResource {
    constructor(){
        this.link = 'http://localhost:4000/tasks';
    }
    
    sendData(data){
        axios.post(`${link}`, data);
    }
}
