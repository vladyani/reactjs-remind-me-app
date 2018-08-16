import axios from 'axios';

export default class SlackWebhooksApi{
    constructor() {
        this.link = 'http://localhost:4000/tasks';
        this.qs = require('qs');
    }

    sendRemindMessage(data) {
        axios.post(`${this.link}`, this.qs.stringify(data));
    }
    
    getRemindMessage(){
        axios.get(`${this.link}`)
            .then(response => json.parse(response))
            .then(data => data);
    }
}
