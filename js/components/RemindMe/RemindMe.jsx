import React from 'react';
import ReactDOM from 'react-dom';
import RestResource from './remindme.service.js';
import Clouds from '../Clouds/Clouds.jsx';
import ApplicationForm from '../ApplicationForm/ApplicationForm.jsx';

export default class RemindMe extends React.Component {
 
    
    componentDidMount(){
        this.getData();
    }
    
    getData(){
        const rest = new RestResource(); 
        const data = rest.getData();
        object.map(elem)
    }    
    
    sendData(){}
        
        const rest = new RestResource(); 
        const data = rest.sendData(data);
    }
    
    render() {

        return (
            <div>
                <Clouds/>
                <ApplicationForm/>
            </div>     
        )
    }
}