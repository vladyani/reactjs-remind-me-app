import React from 'React';
import ReactDOM from 'react-dom';
import SlackIcon from '../SlackIcon/SlackIcon.jsx';

export default class ApplicationForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            date: '',
            message: ''
        }
    }
    
    
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleClick = (event) => {
        this.showData();
    }
    
    showData = (event) => {
        event.preventDefault();
        const object ={
            name: this.state.name,
            date:this.state.date,
            message: this.state.message
        }
        
        console.log(object);
    }
    
    
    render(){
        return(
        <div className="dialog">
          <div className="row">
            <SlackIcon />
                <form>
                     <div className="col">
                          <input className="primary js-input" 
                          placeholder="Enter your slack name" 
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}/>
                    </div>
                    <div className="col">
                          <input className="primary js-input" 
                          type="date"
                          name="date"
                          value={this.state.date}
                          onChange={this.handleChange}/>
                    </div>
                     <div className="col">
                         <textarea 
                            className="primary js-input"
                             name="message"
                              value={this.state.message}
                              onChange={this.handleChange}>
                        </textarea>
                     </div>
                     <div className="col">
                      <button className="primary js-button" type="submit" onClick={this.showData}>Send reminder inside Slack</button>
                    </div>
                </form>
              </div>
            <div className="row note">Remember your note will be rembered</div>
        </div>
        )
    }
}