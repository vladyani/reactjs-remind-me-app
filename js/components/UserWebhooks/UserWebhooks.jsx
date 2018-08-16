import React from 'React';
import ReactDOM from 'react-dom';
import SlackWebhooksApi from '../../application.service';

export default class UserWebhooks extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        const remindMessage = (new SlackWebhooksApi()).getRemindMessage();
        console.log(remindMessage);
    }

    render(){
        return(
           <div>
               <h1>
                   hello world
               </h1>
           </div> 
        )
    }
}