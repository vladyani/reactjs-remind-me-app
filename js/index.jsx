import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import "../scss/main.scss";

document.addEventListener("DOMContentLoaded", function(){

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
