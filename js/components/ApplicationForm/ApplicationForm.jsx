import React from 'React';
import ReactDOM from 'react-dom';
import SlackIcon from '../SlackIcon/SlackIcon.jsx';
import RestResource from './applicationform.service.js';

export default class ApplicationForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            date: '',
            time: '',
            message: ''
        }
    }
    
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    
    handleSubmit = () => {
        this.showData();
    }
    
    
    sendData = (event) => {
        event.preventDefault();
        const formData ={
            name: this.state.name,
            date:this.state.date,
            time: this.state.time,
            message: this.state.message
        }
        
        const restApi = new RestResource();
        const sendData = restApi.sendData(FormData);
        
        console.log(formData);
    }
    
    
    render(){
        return(
        <div className="dialog">
          <div className="row">
            <SlackIcon />
               <h1>Remind me App</h1>
                <form>
                     <div className="col form-group">
                         <label>Enter email</label>
                          <input className="primary js-input" 
                          placeholder="Enter your slack name" 
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}/>
                    </div>
                    <div className="col form-group">
                        <label>Enter Date</label>
                          <input className="primary js-input" 
                          type="date"
                          name="date"
                          value={this.state.date}
                          onChange={this.handleChange}/>
                    </div>
                     <div className="col form-group">
                          <input className="primary js-input" 
                          type="time"
                          name="time"
                          value={this.state.date}
                          onChange={this.handleChange}/>
                    </div>
                     <div className="col form-group">
                         <textarea 
                            className="primary js-input"
                             name="message"
                              value={this.state.message}
                              onChange={this.handleChange}>
                        </textarea>
                     </div>
                     <div className="col form-group">
                      <button className="primary js-button" type="submit"
                      onClick={this.showData}>
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