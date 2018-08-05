import React from 'React';
import ReactDOM from 'react-dom';
import SlackIcon from '../SlackIcon/SlackIcon.jsx';
import RestResource from './applicationform.service.js';
//import TimePicker from 'rc-time-picker';

export default class ApplicationForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            date: '',
            message: ''
        }
    }
    
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = {
            email: this.state.email,
            date:this.state.date,
            message: this.state.message
        }
        
        //create instance from service
        const restApi = new RestResource();
        const sendData = restApi.sendData(formData);
    }
    
    
    transformTextarea = (e) => {
        e.target.style.height = "100px";
    }
    
    
    render(){
        return(
        <div className="dialog">
          <div className="row">
            <SlackIcon />
               <h1>Remind me App</h1>
                <form onSubmit={this.handleSubmit}>
                     <div className="col">
                         <label>Enter email</label>
                          <input className="primary" 
                          placeholder="Enter your slack name" 
                          type="text"
                          name="email"
                          value={this.state.name}
                          onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                        <label>Enter Date</label>
                          <input className="primary" 
                          type="datetime-local"
                          name="date"
                          value={this.state.date}
                          onChange={this.handleChange}/>
                    </div>
                     <div className="col">
                        <label>Enter message</label>
                         <textarea 
                           onFocus={this.transformTextarea} 
                            className="primary"
                             name="message"
                              value={this.state.message}
                              onChange={this.handleChange}>
                        </textarea>
                     </div>
                     <div className="col">
                      <button className="primary" type="submit">
                      Send reminder inside Slack
                      </button>
                    </div>
                </form>
              </div>
            <div className="row note">Remember your note will be rembered</div>
        </div>
        )
    }
}