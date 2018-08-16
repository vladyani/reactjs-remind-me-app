import axios from 'axios';

export default class SlackWebhooksApi{
    constructor() {
        this.link = 'http://localhost:4000/tasks';
    }

    sendRemindMessage(data) {
        const qs = require('qs');
        axios.post(`${this.link}`, qs.stringify(data));
    }
}
