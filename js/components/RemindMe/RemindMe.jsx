import React from 'react';
import ReactDOM from 'react-dom';
import Clouds from '../Clouds/Clouds.jsx';
import ApplicationForm from '../ApplicationForm/ApplicationForm.jsx';

export default class RemindMe extends React.Component {

    render() {

        return (
            <div>
                <Clouds/>
                <ApplicationForm/>
            </div>     
        )
    }
}