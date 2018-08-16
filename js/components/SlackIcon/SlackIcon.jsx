import React from 'react';
import ReactDOM from 'react-dom';

export default class SlackIcon extends React.Component{
    constructor(props){
        super(props);
    }

    render(){   
        return(
            <div className="slack">
                <span className="slack-dot slack-dot--a"></span>
                <span className="slack-dot slack-dot--b"></span>
                <span className="slack-dot slack-dot--c"></span>
                <span className="slack-dot slack-dot--d"></span>
            </div>
        )
    }

}