import React from 'react';
import ReactDOM from 'react-dom';
import RestResource from './remindme.service.js';
import Clouds from '../Clouds/Clouds.jsx';
import SlackIcon from '../SlackIcon/SlackIcon.jsx';

export default class RemindMe extends React.Component {
 
    render() {

        return (
            <div>
                <Clouds/>
                <SlackIcon />
            </div>     
        )
    }
}