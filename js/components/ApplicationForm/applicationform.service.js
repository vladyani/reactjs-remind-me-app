import axios from 'axios';

export default class RestResource {
    constructor() {
        this.link = 'http://localhost:4000/tasks';
    }



    sendData(data) {

        const qs = require('qs');

        axios.post(`${this.link}`, qs.stringify(data));
        console.log(data);
    }
}
