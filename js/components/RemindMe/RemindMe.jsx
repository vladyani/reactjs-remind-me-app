import React from 'react';
import ReactDOM from 'react-dom';
import RestResource from './remindme.service.js';

export default class RemindMe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            testArr: []
        }
    }
    
//  TODO
//    componentDidMount(){
//        const testObject = ( new RestResource).getData();
//        
//        console.log(testObject);
//        
//        testObject.map( elem => {
//            return this.setState({
//                testArr: [...this.state.testArr, elem]
//            })
//        })
//    }
//    
//    
    render() {
         const testObject = ( new RestResource).getData();
        return (
          <div>
           <ul>
                {
                    testObject.map((elem,index) => {
                        return(
                            <li key={index}>{elem.testA}</li>
                        )
                    })        
                }
            </ul>
          </div>
        )
    }
}
